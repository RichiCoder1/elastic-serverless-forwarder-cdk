import { Arn, RemovalPolicy } from "aws-cdk-lib";
import { Bucket, IBucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { CfnApplication } from "aws-cdk-lib/aws-sam";
import { Construct } from "constructs";
import { stringify } from "yaml";
import { ForwarderInput, IForwarderInput } from "./config";
import { Parameters } from "./parameters";

export interface ServerlessForwarderProps {
  readonly inputs: IForwarderInput[];
  readonly version?: string;
  readonly bucket?: IBucket;
  readonly bucketName?: string;
  readonly bucketPrefix?: string;
  readonly overrideParameters?: Record<string, string>;
}

export class ServerlessForwarder extends Construct {
  public readonly application: CfnApplication;

  /**
   * @internal
   */
  readonly _rendered: string;

  public constructor(
    scope: Construct,
    id: string,
    readonly props: ServerlessForwarderProps
  ) {
    super(scope, id);

    if (props.inputs.length === 0) {
      throw new Error("You must provide inputs for this construct.");
    }

    let bucket: IBucket;
    if (props.bucket) {
      bucket = props.bucket;
    } else {
      bucket = new Bucket(this, "ConfigBucket", {
        bucketName: props.bucketName,
        autoDeleteObjects: true,
        removalPolicy: RemovalPolicy.DESTROY,
      });
    }

    const inputs: ForwarderInput[] = [];
    const parameters: Parameters = {};
    for (const input of props.inputs) {
      const formattedInput = input.bind(parameters);
      inputs.push(formattedInput);
    }

    this._rendered = stringify({ inputs });

    const deployment = new BucketDeployment(this, "ConfigFile", {
      sources: [Source.data("config.yaml", this._rendered)],
      destinationBucket: bucket,
      destinationKeyPrefix: props.bucketPrefix,
    });

    const configUrl = deployment.deployedBucket.s3UrlForObject(
      `${props.bucketPrefix}config.yaml`
    );

    this.application = new CfnApplication(this, "ForwarderApplication", {
      location: {
        applicationId: Arn.format({
          partition: "aws",
          service: "serverlessrepo",
          region: "eu-central-1",
          account: "267093732750",
          resource: "applications",
          resourceName: "elastic-serverless-forwarder",
        }),
        semanticVersion: "1.6.0",
      },
      parameters: {
        ...parameters,
        ...(props.overrideParameters ?? {}),
        ElasticServerlessForwarderS3ConfigFile: configUrl,
      },
    });
  }
}

export * from "./config";
export * from "./parameters";
export * from "./outputs";

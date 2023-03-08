import { Arn } from "aws-cdk-lib";
import { CfnApplication } from "aws-cdk-lib/aws-sam";
import { Construct } from "constructs";
import { IForwarderInput } from "./input";

export interface ServerlessForwarderProps {
  inputs?: IForwarderInput[];
}

export class ServerlessForwarder extends Construct {
  public readonly application: CfnApplication;

  public constructor(
    scope: Construct,
    id: string,
    readonly props: ServerlessForwarderProps
  ) {
    super(scope, id);

    this.application = new CfnApplication(this, "Forwarder", {
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
    });
  }
}

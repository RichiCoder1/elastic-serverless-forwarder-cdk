import { Size, SizeRoundingBehavior } from "aws-cdk-lib";
import { ForwarderOutput, OutputBase, Secret } from "../config";
import { Parameters } from "../parameters";

export interface ElasticsearchOutputProps {
  readonly elasticsearchUrl?: string;
  readonly cloudId?: Secret;
  readonly username?: Secret;
  readonly password?: Secret;
  readonly apiKey?: Secret;
  readonly esDatastreamName?: string;
  readonly batchMaxActions?: number;
  readonly batchMaxBytes?: Size;
  readonly sslAssertFingerprint?: string;
}

export class ElasticsearchOuput extends OutputBase {
  constructor(private readonly props: ElasticsearchOutputProps) {
    super();
  }

  bind(parameters: Parameters): ForwarderOutput {
    const props = this.props;

    return {
      type: "elasticsearch",
      args: {
        elasticsearch_url: props.elasticsearchUrl,
        cloud_id: this._bindSecret(parameters, props.cloudId),
        username: this._bindSecret(parameters, props.password),
        password: this._bindSecret(parameters, props.password),
        api_key: this._bindSecret(parameters, props.apiKey),
        es_datastream_name: props.esDatastreamName,
        batch_max_actions: props.batchMaxActions,
        batch_max_bytes: props.batchMaxBytes?.toBytes({
          rounding: SizeRoundingBehavior.FAIL,
        }),
        ssl_asset_fingerprint: props.sslAssertFingerprint,
      },
    };
  }
}

import { Size, SizeRoundingBehavior } from "aws-cdk-lib";
import { ForwarderOutput, OutputBase, Secret } from "../config";
import { Parameters } from "../parameters";

export interface LogstashOutputProps {
  readonly logstashUrl: string;
  readonly username?: Secret;
  readonly password?: Secret;
  readonly maxBatchSize?: Size;
  readonly compressionLevel?: number;
  readonly sslAssertFingerprint?: string;
}

export class LogstashOutput extends OutputBase {
  constructor(private readonly props: LogstashOutputProps) {
    super();
  }

  bind(parameters: Parameters): ForwarderOutput {
    const props = this.props;

    return {
      type: "logstash",
      args: {
        logstashUrl: props.logstashUrl,
        username: this._bindSecret(parameters, props.password),
        password: this._bindSecret(parameters, props.password),
        max_batch_size: props.maxBatchSize?.toBytes({
          rounding: SizeRoundingBehavior.FAIL,
        }),
        compression_level: props.compressionLevel,
        ssl_asset_fingerprint: props.sslAssertFingerprint,
      },
    };
  }
}

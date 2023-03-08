import { Size } from "aws-cdk-lib";
import { ISecret } from "aws-cdk-lib/aws-secretsmanager";
import { ParameterKeys, Parameters } from "./parameters";

export interface ForwarderOutput {
  readonly type: string;
  readonly args: Record<string, any>;
}

export interface ForwarderInput {
  readonly type: string;
  readonly id: string;
  readonly outputs: ForwarderOutput[];
}

export interface MultilineProps {
  readonly type: string;
  readonly pattern: string;
  readonly negate?: boolean;
  readonly match?: string;
  readonly flushPattern?: string;
  readonly maxLines?: number;
  readonly maxBytes?: Size;
  readonly countLines?: number;
  readonly skipNewline?: boolean;
}

export interface ForwarderInputPropsBase {
  readonly tags?: string[];
  readonly include?: string[];
  readonly exclude?: string[];
  readonly jsonContentType?: "single" | "ndjson" | "disabled";
  readonly expandEventListFromField?: string;
  readonly multiline?: MultilineProps;
}

export interface IForwarderInput {
  bind(parameters: Parameters): ForwarderInput;
}

export interface IForwarderOutput {
  bind(parameters: Parameters): ForwarderOutput;
}

const SECRET_TYPE = Symbol.for("elastic-serverless-forwarder-cdk.Secret");

export abstract class Secret {
  public static fromSecretsManager(secret: ISecret, field?: string): Secret {
    return {
      __type: SECRET_TYPE,
      arn: field ? `${secret.secretArn}:${field}::` : secret.secretArn,
      keyArn: secret.encryptionKey?.keyArn,
    };
  }

  public static isSecret(secret: unknown): secret is Secret {
    return (
      secret != null &&
      typeof secret === "object" &&
      "__type" in secret &&
      secret.__type === SECRET_TYPE
    );
  }

  /**
   * @internal
   */
  public abstract readonly __type: symbol;
  public abstract readonly arn: string;
  public abstract readonly keyArn?: string;
}

export abstract class InputBase implements IForwarderInput {
  bind(_parameters: Parameters): ForwarderInput {
    throw new Error("Method not implemented.");
  }

  /**
   * @internal
   */
  protected _bindCommon(props: ForwarderInputPropsBase): any {
    return {
      tags: props.tags,
      include: props.include,
      exclude: props.exclude,
      json_content_type: props.jsonContentType,
      expand_event_list_from_field: props.expandEventListFromField,
      multiline: props.multiline
        ? {
            type: props.multiline.type,
            pattern: props.multiline.pattern,
            negate: props.multiline.negate,
            flush_pattern: props.multiline.flushPattern,
            max_lines: props.multiline.maxLines,
            max_bytes: props.multiline.maxBytes?.toBytes(),
            count_lines: props.multiline.countLines,
            skip_newline: props.multiline.skipNewline,
          }
        : undefined,
    };
  }

  /**
   * @internal
   */
  protected _bindOutputs(
    parameters: Parameters,
    outputs: IForwarderOutput[]
  ): ForwarderOutput[] {
    if (outputs.length === 0) {
      throw new Error(`You must provide ouputs.`);
    }
    return outputs.map((output) => output.bind(parameters));
  }
}

export abstract class OutputBase implements IForwarderOutput {
  bind(_parameters: Parameters): ForwarderOutput {
    throw new Error("Method not implemented.");
  }

  /**
   * @internal
   */
  protected _bindSecret(parameters: Parameters, prop: unknown): any {
    if (Secret.isSecret(prop)) {
      ParameterKeys.append(parameters, ParameterKeys.secretArns, prop.arn);

      if (prop.keyArn) {
        ParameterKeys.append(parameters, ParameterKeys.kmsKeys, prop.keyArn);
      }
      return prop.arn;
    }
    return prop;
  }
}

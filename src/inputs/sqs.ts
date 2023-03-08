import { IQueue } from "aws-cdk-lib/aws-sqs";
import {
  ForwarderInput,
  ForwarderInputPropsBase,
  IForwarderOutput,
  InputBase,
} from "../config";
import { ParameterKeys, Parameters } from "../parameters";

export interface SQSInputProps extends ForwarderInputPropsBase {
  queue: IQueue;
}

export class SQSInput extends InputBase {
  constructor(
    private readonly props: SQSInputProps,
    private readonly outputs: IForwarderOutput[]
  ) {
    super();
  }
  bind(parameters: Parameters): ForwarderInput {
    ParameterKeys.append(
      parameters,
      ParameterKeys.sqsEvents,
      this.props.queue.queueArn
    );
    return {
      type: "sqs",
      id: this.props.queue.queueArn,
      outputs: this._bindOutputs(parameters, this.outputs),
      ...this._bindCommon(this.props),
    };
  }
}

export interface S3SQSInputProps extends ForwarderInputPropsBase {
  queue: IQueue;
}

export class S3SQSInput extends InputBase {
  constructor(
    private readonly props: S3SQSInputProps,
    private readonly outputs: IForwarderOutput[]
  ) {
    super();
  }
  bind(parameters: Parameters): ForwarderInput {
    ParameterKeys.append(
      parameters,
      ParameterKeys.s3SQSEvents,
      this.props.queue.queueArn
    );
    return {
      type: "s3-sqs",
      id: this.props.queue.queueArn,
      outputs: this._bindOutputs(parameters, this.outputs),
      ...this._bindCommon(this.props),
    };
  }
}

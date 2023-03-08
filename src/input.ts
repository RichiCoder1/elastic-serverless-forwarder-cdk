import {} from "aws-sdk-lib";

export interface IForwarderOutput {
  readonly type: string;
  readonly args: Record<string, any>;
}

export interface IForwarderInputProps {
  readonly type: string;
  readonly id: string;
  readonly outputs: IForwarderOutput[];
}

export interface IForwarderBindProps {
  input: IForwarderInputProps;
  parameters: Parameter;
}

export interface ForwarderInput {
  bind(): IForwarderInputProps;
}

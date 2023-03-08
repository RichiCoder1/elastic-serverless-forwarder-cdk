export class FowarderParameter {
  static prefix = "ElasticServerlessForwarder";
}

export class ParameterKeys {
  // General Configuration Keys
  static s3ConfigFile = "S3ConfigFile";
  static secretArns = "SSMSecrets";
  static kmsKeys = "KMSKeys";

  // Inputs
  static sqsEvents = "SQSEvents";
  static s3SQSEvents = "S3SQSEvents";
  static kinesisEvents = "KinesesEvents";
  static cloudWatchLogsEvents = "CloudWatchLogsEvents";

  // Permissions
  static s3Buckets = "S3Buckets";
  static securityGroups = "SecurityGroups";
  static subnets = "Subnets";

  static append(
    parameters: Parameters,
    key: string,
    value: string
  ): Parameters {
    parameters[key] = (parameters[key] ?? "") + "," + value;
    return parameters;
  }
}

export type Parameters = { [key: string]: string };

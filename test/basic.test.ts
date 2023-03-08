import { test, expect } from "@jest/globals";
import { App, Stack } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import { Queue } from "aws-cdk-lib/aws-sqs";
import { ElasticsearchOuput, ServerlessForwarder } from "../src";
import { SQSInput } from "../src/inputs";

test("create works", () => {
  const app = new App();
  const stack = new Stack(app, "MyStack");

  const queue = new Queue(stack, "TestQueue");

  const output = new ElasticsearchOuput({});

  new ServerlessForwarder(stack, "Forwarder", {
    inputs: [new SQSInput({ queue }, [output])],
  });

  const template = Template.fromStack(stack);

  expect(template.toJSON()).toMatchSnapshot();
});

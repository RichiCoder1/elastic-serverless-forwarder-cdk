import { App, Stack } from "aws-cdk-lib";
import { ServerlessForwarder } from "../src";

test("can new", () => {
  const app = new App();
  const stack = new Stack(app, "MyStack");
  new ServerlessForwarder(stack, "Forwarder", {});
});

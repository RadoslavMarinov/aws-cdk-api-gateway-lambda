import * as cdk from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import * as Api from "../../lib/api-stack";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/api-stack.ts
test("SQS Queue Created", () => {
  const app = new cdk.App();
  //     // WHEN
  const stack = new Api.ApiStack(app, "MyTestStack");
  //     // THEN
  const template = Template.fromStack(stack);

  const lambda = template.findResources("AWS::Lambda::Function");

  template.hasResourceProperties(
    "AWS::Lambda::Function",
    Match.objectLike({
      Handler: 'index.main',
      MemorySize: 1024,
      Runtime: "nodejs18.x",
      Timeout: 5,
    })
  );
});

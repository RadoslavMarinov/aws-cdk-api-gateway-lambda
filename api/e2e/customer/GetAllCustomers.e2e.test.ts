import { fromIni } from "@aws-sdk/credential-providers";
import {
  CloudFormationClient,
  ListExportsCommand,
} from "@aws-sdk/client-cloudformation"; // ES Modules import
import { AwsCredentialIdentity } from "@aws-sdk/types";
import { getCredentialsFromCredFiles } from "./utils/credentials.util";

const input = {
  // ListExportsInput
  NextToken: "STRING_VALUE",
};
// const command = new ListExportsCommand(input);
// const response = await client.send(command);

describe("Get All customers API endpoint", () => {
  test("Should statusCode 200", async () => {
    const credential = await getCredentialsFromCredFiles("default") 

    const cfnClient = new CloudFormationClient({
      credentials: credential,
      region: process.env.AWS_DEFAULT_REGION || "eu-west-2",
    });

    const command = new ListExportsCommand({});
    const response = await cfnClient.send(command);

    const apiUrl = response.Exports?.find(x => x.Name === "apiUrl");
    expect(apiUrl?.Value).toBeDefined();

    expect(response.$metadata.httpStatusCode).toBe(200);
  });
});

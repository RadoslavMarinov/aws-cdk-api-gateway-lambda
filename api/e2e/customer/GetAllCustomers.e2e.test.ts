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
    // const getCredentials = fromIni({ profile: "default" });
    // const credentials = await getCredentials();


    const credential = await getCredentialsFromCredFiles("default") 

    const cfnClient = new CloudFormationClient({
      credentials: credential,
      region: "eu-west-2",
    });

    const command = new ListExportsCommand({});
    const response = await cfnClient.send(command);

    expect(response).toBeDefined();
  });
});

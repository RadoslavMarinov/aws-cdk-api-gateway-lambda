import { fromIni } from "@aws-sdk/credential-providers";
import { AwsCredentialIdentity } from "@aws-sdk/types";

export async function getCredentialsFromCredFiles(profile:string): Promise<AwsCredentialIdentity> {
  let credential = {} as AwsCredentialIdentity;

  try {
    const credentials = fromIni({
      profile
    });
    credential = await credentials();
  } catch (e) {}

  if (!(credential.accessKeyId && credential.secretAccessKey)) {
    credential = {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    }
  }


  return credential;
}

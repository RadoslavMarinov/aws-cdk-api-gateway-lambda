###  use node 18

## Bootstrapping 
### Prerequisites:
  - Account number: `aws sts get-caller-identity`
  - region:         `aws configure get region`
  - cdk bootstrap aws://ACCOUNT-NUMBER/REGION
  - 
- `cdk bootstrap aws://838379866097/eu-west-2`


# [Turorial](https://docs.aws.amazon.com/cdk/v2/guide/serverless_example.html)

## synthesizes the stack
  `cdk synth`
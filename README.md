###  use node 18

## Bootstrapping 
### Prerequisites:

* Install cdk
  * `npm install -g aws-cdk`
  - Account number: `aws sts get-caller-identity`
  - region:         `aws configure get region`
  - cdk bootstrap aws://ACCOUNT-NUMBER/REGION

* First time `cdk bootstrap aws://838379866097/eu-west-2`



## Manual Deployment
  * **(Optional)** `cdk synth`
  * Deploy `cdk deploy`

## [Test Endpoins](https://preef9sri7.execute-api.eu-west-2.amazonaws.com/prod)
  - [Get all Customers](https://preef9sri7.execute-api.eu-west-2.amazonaws.com/prod/customers)

## [Turorial](https://docs.aws.amazon.com/cdk/v2/guide/serverless_example.html)

<!--  -->
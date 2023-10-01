import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs'
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const api =  new apigateway.RestApi(this, "restapi", {
      restApiName: "Rent a Car",
      description: "Rent a Car rest API",
    })

    api.root.addMethod('GET')
    const customerResource = api.root.addResource('customers')

    const lambdaEntryPoint = path.join(__dirname, `/resources/Customer/lambda/get-all-customers.lambda.ts`)
    const lambdaHandler = new NodejsFunction(this, 'my-function', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'main',
      entry: lambdaEntryPoint,
    });

    customerResource.addMethod('GET', new apigateway.LambdaIntegration(lambdaHandler))
    // The code that defines your stack goes here
 

    new cdk.CfnOutput(this,"apiUrl",{
      value: api.url,
      exportName: "apiUrl",
      description: "Rent A Car api url"
    })
  }
}

import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs'
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path'
import * as cognito from 'aws-cdk-lib/aws-cognito';
import * as apiGatewayAuthorizers from '@aws-cdk/aws-apigatewayv2-authorizers-alpha';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    // Cognito
    // 👇 create the user pool
    const userPool = new cognito.UserPool(this, 'userpool', {
      userPoolName: `my-user-pool`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      selfSignUpEnabled: true,
      signInAliases: {email: true},
      autoVerify: {email: true},
      passwordPolicy: {
        minLength: 6,
        requireLowercase: false,
        requireDigits: false,
        requireUppercase: false,
        requireSymbols: false,
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
    });
    
    userPool.addDomain("cognito-domain",{
      cognitoDomain:{
        domainPrefix:'rikotech'
      }
    })
    userPool.addClient("userpool-client",
    {
      authFlows: {
        adminUserPassword: true,
        userPassword: true,
        custom: true,
        userSrp: true,
      },
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
      ],
      
      oAuth:{
        callbackUrls: ["https://example.com/callback"],
        logoutUrls: ["https://example.com/logout"],
        flows: {
          authorizationCodeGrant: true,
          implicitCodeGrant: true,
        },
        scopes: [
          cognito.OAuthScope.PHONE,
          cognito.OAuthScope.EMAIL,
          cognito.OAuthScope.OPENID,
          cognito.OAuthScope.PROFILE,
          cognito.OAuthScope.COGNITO_ADMIN
        ]
      },
      
      
    })

    // Lambda Handler
    const lambdaEntryPoint = path.join(__dirname, `/resources/Customer/lambda/get-all-customers.lambda.ts`)
    const lambdaHandler = new NodejsFunction(this, 'my-function', {
      memorySize: 1024,
      timeout: cdk.Duration.seconds(5),
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'main',
      entry: lambdaEntryPoint,
    });

    // API Gateway
    const api =  new apigateway.RestApi(this, "restapi", {
      restApiName: "Rent a Car",
      description: "Rent a Car rest API",
    })

    const authorizer = new apigateway.CognitoUserPoolsAuthorizer(
      this,
      'user-pool-authorizer',
      {
        cognitoUserPools: [userPool],
        identitySource:'method.request.header.Authorization',
      },
      
    );

    const rootResource = api.root.addMethod('GET',new apigateway.LambdaIntegration(lambdaHandler),{
       
    })
      

    const customerResource = api.root.addResource('customers',{
      
    })
    customerResource.addMethod('GET', new apigateway.LambdaIntegration(lambdaHandler),{
      authorizationType: apigateway.AuthorizationType.COGNITO,
      authorizer,
      authorizationScopes: ["email"], 
    })
    // The code that defines your stack goes here
 

    new cdk.CfnOutput(this,"apiUrl",{
      value: api.url,
      exportName: "apiUrl",
      description: "Rent A Car api url"
    })
  }
}

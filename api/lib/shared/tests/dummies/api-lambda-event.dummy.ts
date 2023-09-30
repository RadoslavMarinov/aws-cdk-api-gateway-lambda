import { APIGatewayProxyEventV2 } from "aws-lambda";

export const getDummyEvent = ():APIGatewayProxyEventV2 => ({ 
  headers:{ "Accept":"application/json"},
  isBase64Encoded:false,
  version:"1",
  rawPath: "/customers",
  rawQueryString:"?something=somethingelse&who=knowswhat",
  requestContext:{
    accountId: "123456789012",
    apiId: "1",
    domainName: "example.com",
    domainPrefix: "",
    http: {
      method: "",
      path: "",
      protocol: "",
      sourceIp: "",
      userAgent: ""
    },
    requestId: "",
    routeKey: "",
    stage: "",
    time: "",
    timeEpoch: 0
  },
  routeKey: "key",
})
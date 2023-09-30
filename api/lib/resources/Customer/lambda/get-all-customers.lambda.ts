import { APIGatewayProxyEventV2,APIGatewayProxyResultV2 } from "aws-lambda";
import { Customer } from "../interfaces/Customer.interfaces";

export async function main(event:APIGatewayProxyEventV2) :Promise<APIGatewayProxyResultV2> {
  console.log('event 👉', event);
  const body:Customer[] = [
    {
      id: 1,
      name: "Chuck Norris",
      age: Date.now()
    }
  ]
  return {
    statusCode: 200,
    body: JSON.stringify(body)
  }
}

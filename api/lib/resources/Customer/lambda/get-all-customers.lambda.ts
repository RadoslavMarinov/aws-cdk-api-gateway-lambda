import { APIGatewayProxyEventV2,APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { Customer } from "../interfaces/Customer.interfaces";
import { getAllCustomers } from "../services/customer.service";

export async function main(event:APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> {
  // console.log('event 👉', event);
  const body:Customer[] = await getAllCustomers()
  return {
    statusCode: 200,
    body: JSON.stringify(body)
  }
}

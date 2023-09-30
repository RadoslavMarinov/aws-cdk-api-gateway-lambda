import { APIGatewayProxyEventV2 } from "aws-lambda";
import { main } from "./get-all-customers.lambda";
import { Customer } from "../interfaces/Customer.interfaces";
import { getDummyEvent } from "../../../shared/tests/dummies/api-lambda-event.dummy";
import * as customerService from "../services/customer.service";
import { getAllCustomers } from "../../../shared/tests/stubs/all-customers.stub";

describe("Get All Customers Lambda Handler", () => {
  beforeAll(() => {});
  afterAll(() => {});

  it("Should return all customers", async () => {
    const allCustomersStub = getAllCustomers();

    jest
      .spyOn(customerService, "getAllCustomers")
      .mockResolvedValue(allCustomersStub);

    const event = getDummyEvent();

    const res = await main(event);

    expect(res.statusCode).toBe(200);

    expect(() => {
      return JSON.parse(res.body!);
    }).not.toThrow();

    const data = JSON.parse(res.body!) as Customer[];

    expect(data).toEqual(allCustomersStub);
  });
});

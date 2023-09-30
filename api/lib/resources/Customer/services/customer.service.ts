import { Customer } from "../interfaces/Customer.interfaces";

export async function getAllCustomers():Promise<Customer[]> {
  // -- Usually db/api or other type of interface goes call here
  return [
    {
      id: 1,
      name: "Chuck Norris",
      age: Date.now(),
    }
  ]
}
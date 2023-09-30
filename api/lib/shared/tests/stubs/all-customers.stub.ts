import { Customer } from "../../../resources/Customer/interfaces/Customer.interfaces";

export const getAllCustomers = (): Customer[] => [
  {
    id: 42,
    name: "Chuck Norris",
    age: 150,
  },
  {
    id: 100,
    name: "Test Agent 2",
    age: 33,
  },
];

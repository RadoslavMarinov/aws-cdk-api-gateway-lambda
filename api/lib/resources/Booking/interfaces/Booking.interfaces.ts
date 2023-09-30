import { Resource } from "../../../shared/interfaces/Resource.interfaces";
import { Car } from "../../Car/interfaces/Car.interfaces";
import { Customer } from "../../Customer/interfaces/Customer.interfaces";

export interface Booking extends Resource {
  customer: Customer;
  cars: Car[]; // TODO: Can multiple cars be assigned to a single booking? Why not🤔? IDK 🤔.
}
import { Resource } from "../../../shared/interfaces/Resource.interfaces";
import { Booking } from "../../Booking/interfaces/Booking.interfaces";

export interface Car extends Resource {
  name: string;
  model: string;
  bookings?:Booking[]
}
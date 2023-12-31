import { Resource } from "../../../shared/interfaces/Resource.interfaces";
import { Booking } from "../../Booking/interfaces/Booking.interfaces";

export interface Customer extends Resource{
  id: string|number;
  name: string;
  age?: number;
  address?: string;
  bookings?: Booking[]
}
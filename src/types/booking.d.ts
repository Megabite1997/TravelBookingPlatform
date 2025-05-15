export interface FlightParams {
  date: string;
  destination: string;
  passengers: number;
}

export interface HotelParams {
  location: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
}

export interface UserData {
  name: string;
  email: string;
  phone: string;
}

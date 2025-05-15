import api from "./api";
import { FlightParams, HotelParams, UserData } from "@/types/booking";

export const fetchFlights = async (params: FlightParams) => {
  const response = await api.get("/bookings/flights", { params });
  return response.data;
};

export const bookFlight = async (flightId: string, userData: UserData) => {
  const response = await api.post(`/bookings/flights/${flightId}`, userData);
  return response.data;
};

export const fetchHotels = async (params: HotelParams) => {
  const response = await api.get("/bookings/hotels", { params });
  return response.data;
};

export const bookHotel = async (hotelId: string, userData: UserData) => {
  const response = await api.post(`/bookings/hotels/${hotelId}`, userData);
  return response.data;
};

export const getBookingHistory = async () => {
  const response = await api.get("/bookings/history");
  return response.data;
};

import api from "./api";

export const getLocationDetails = async (location: string) => {
  const response = await api.get("/map/location", {
    params: {
      query: location,
    },
  });
  return response.data;
};

export const getRouteDetails = async (origin: string, destination: string) => {
  const response = await api.get("/map/route", {
    params: {
      origin,
      destination,
    },
  });
  return response.data;
};

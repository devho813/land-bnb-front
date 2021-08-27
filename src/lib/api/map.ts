import apiClient from ".";

type GeoLocationInfoAPIResponse = {
  country: string;
  city: string;
  district: string;
  streetAddress: string;
  detailAddress: string;
  postcode: string;
  latitude: number;
  longitude: number;
};

export const getLocationInfoAPI = async (
  latitude: number,
  longitude: number
) => {
  return apiClient.get<GeoLocationInfoAPIResponse>(
    `/maps/location?latitude=${latitude}&longitude=${longitude}`
  );
};

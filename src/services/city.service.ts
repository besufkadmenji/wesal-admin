import {
  City,
  CityPaginationInput,
  CountryPaginationInput,
  CreateCityInput,
  PaginatedCityResponse,
  PaginatedCountryResponse,
  UpdateCityInput,
} from "@/gql/graphql";
import { CITIES_QUERY } from "@/graphql/city/cities";
import { CITY_QUERY } from "@/graphql/city/city";
import { COUNTRIES_QUERY } from "@/graphql/city/countries";
import { CREATE_CITY_MUTATION } from "@/graphql/city/createCity";
import { REMOVE_CITY_MUTATION } from "@/graphql/city/removeCity";
import { UPDATE_CITY_MUTATION } from "@/graphql/city/updateCity";
import client from "@/utils/apollo.client";
import { parseGraphQLError } from "@/utils/parse-graphql-error";

class CityService {
  static countries = async (
    pagination: CountryPaginationInput,
  ): Promise<PaginatedCountryResponse | null> => {
    try {
      const countryResult = await client().query({
        query: COUNTRIES_QUERY,
        variables: {
          pagination,
        },
      });
      return countryResult.data?.countries ?? null;
    } catch (e) {
      console.error("cityResult", e);
    }
    return null;
  };
  static cities = async (
    pagination: CityPaginationInput,
  ): Promise<PaginatedCityResponse | null> => {
    try {
      const cityResult = await client().query({
        query: CITIES_QUERY,
        variables: {
          pagination,
        },
      });
      return cityResult.data?.cities ?? null;
    } catch (e) {
      console.error("cityResult", e);
    }
    return null;
  };
  static city = async (cityId: string): Promise<City | null> => {
    try {
      const cityResult = await client().query({
        query: CITY_QUERY,
        variables: {
          cityId,
        },
      });
      return cityResult.data?.city ?? null;
    } catch (e) {
      console.error("cityResult", e);
    }
    return null;
  };

  static createCity = async (input: CreateCityInput) => {
    try {
      const createResponse = await client().mutate({
        mutation: CREATE_CITY_MUTATION,
        variables: {
          input,
        },
      });
      return createResponse.data?.createCity ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
  static updateCity = async (input: UpdateCityInput) => {
    try {
      const updateCityResponse = await client().mutate({
        mutation: UPDATE_CITY_MUTATION,
        variables: {
          input,
        },
      });
      return updateCityResponse.data?.updateCity ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };

  static removeCity = async (removeCityId: string) => {
    try {
      const removeCityResponse = await client().mutate({
        mutation: REMOVE_CITY_MUTATION,
        variables: {
          removeCityId,
        },
      });
      return removeCityResponse.data?.removeCity ?? null;
    } catch (error) {
      // Parse and throw the error with a readable message
      const errorMessage = parseGraphQLError(error);
      throw new Error(errorMessage);
    }
  };
}

export default CityService;

import { EXT_API } from "@/constants/external-public-apis";
import { APIResponse } from "@/types/apiResponse";
import { CountryStateResponse } from "@/types/countryState";
import axios, { AxiosError } from "axios";

export const fetchUSCountryStates = async (): Promise<APIResponse<CountryStateResponse>> => {
  try {
    const response = await axios.post<CountryStateResponse>(EXT_API.COUNTRY_STATES, {
      country: "United States",
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error as AxiosError,
    };
  }
};

export type CountryStateResponse = {
  error: string;
  msg: string;
  data: CountryData;
};

export type CountryData = {
  name: string;
  iso3: string; //country code
  iso2?: string; //country code 2
  states: State[];
};

export type State = {
  name: string;
  state_code: string;
};

import { State } from "./countryState";

export type Job = {
  id: number;
  title: string;
  description: string;
  salaryMin: number;
  salaryMax: number;
  author: string;
  jobType: JobType;
  location: string;
  state: State;
  workSetup: WorkSetup;
  periodicity: Periodicity;
  currency: Currency;
};

export enum Periodicity {
  Month = "month",
  Year = "year",
}

export enum JobType {
  FullTime = "Full-time",
  PartTime = "Part-time",
  Contractual = "Contractual",
}

export enum WorkSetup {
  Hybrid = "Hybrid",
  OnSite = "On-site",
  WorkFromHome = "Work from Home",
}

export enum Currency {
  PHP = "PHP",
  USD = "USD",
}

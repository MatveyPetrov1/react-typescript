import { Country } from "@/entities/Country";
import { Currencies } from "@/entities/Currency";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = "INCORRECT_USER_DATA",
  INCORRECT_AGE = "INCORRECT_AGE",
  INCORRECT_COUNTRY = "INCORRECT_COUNTRY",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}

export interface ProfileType {
  firstname?: string;
  lastname?: string;
  age?: string | number;
  currency?: Currencies;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: ProfileType;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
  form?: ProfileType;
  validateErrors?: ValidateProfileError[];
}

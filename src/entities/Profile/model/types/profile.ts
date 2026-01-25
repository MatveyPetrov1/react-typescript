import { Country } from "@/entities/Country";
import { Currencies } from "@/entities/Currency";

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
}

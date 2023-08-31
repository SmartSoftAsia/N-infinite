import { InitOptions } from "i18next";
import { i18n as defaultConfig } from "../../../next-i18next.config";

export enum Language {
  ENGLISH = "en-US",
  THAI = "th-TH",
}

export enum LanguagePath {
  ENGLISH = "en",
  THAI = "th",
}

export const fallbackLng = defaultConfig.defaultLocale;

export const i18nextOptions: InitOptions = {
  initImmediate: false,
  fallbackLng: fallbackLng,
  preload: defaultConfig.locales,
  debug: false,
  backend: {
    loadPath: "public/locales/{{lng}}/{{ns}}.json",
  },
  ignoreJSONStructure: false,
};

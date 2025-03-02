import type { SupportedLocales } from "@i18n/config";
import { getEntry } from "astro:content";

export const getAboutForLocale = async (locale: SupportedLocales[number]) =>
  getEntry("about", `about${locale}`);

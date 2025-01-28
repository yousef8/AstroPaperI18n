import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://yousef8.github.io", // replace this with your deployed domain
  base: "/AstroPaperI18n", // only needed for deployment on github pages other than that remove it or set it to empty string ""
  author: "Yousef Elsayed",
  profile: "https://yousef8.github.io/AstroPaperI18n",
  desc: "A fork of AstroPaper theme with support for I18n",
  title: "AstroPaper I18n",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  editPost: {
    url: "https://github.com/yousef8/AstroPaperI18n/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  locales: ["en", "ar"], // html lang code. Set this empty and default will be "en"
  defaultLocale: "en", // html lang code. must be one of the locales array.
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
  direction: "ltr", // html text direction. allowed values "ltr" | "rtl" | "auto". Set this empty and default will be "ltr"
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: true,
  },
  {
    name: "Facebook",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: true,
  },
  {
    name: "Instagram",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    active: false,
  },
  {
    name: "X",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Twitch",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "YouTube",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "WhatsApp",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Snapchat",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Pinterest",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "TikTok",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "CodePen",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Discord",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "GitLab",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Reddit",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Skype",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Steam",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Telegram",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
  {
    name: "Mastodon",
    href: "https://github.com/yousef8/AstroPaperI18n",
    active: false,
  },
];

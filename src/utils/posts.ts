import type { SupportedLocales } from "@i18n/config";
import { getCollection, type CollectionEntry } from "astro:content";

type GetPostsOptions = {
  draft?: boolean;
  allowedLocales?: SupportedLocales;
};

type CreateStaticPathsByLocaleOptions = {
  defaultLocale?: string;
};

type GetPostsStaticPathsGroupedByLocaleOptions = GetPostsOptions &
  CreateStaticPathsByLocaleOptions;

export const getPostsStaticPathsGroupedByLocale = async ({
  draft,
  allowedLocales,
  defaultLocale,
}: GetPostsStaticPathsGroupedByLocaleOptions = {}) =>
  createStaticPathsByLocale(
    await getPostsGroupedByLocale({ draft, allowedLocales }),
    { defaultLocale }
  );

export const getPostsGroupedByLocale = async ({
  draft,
  allowedLocales,
}: GetPostsOptions = {}) =>
  groupPostsByLocale(await getPosts({ draft, allowedLocales }), {
    allowedLocales,
  });

export const getPosts = async ({
  draft = true,
  allowedLocales = [],
}: GetPostsOptions = {}) => {
  const posts: CollectionEntry<"blog">[] = await getCollection(
    "blog",
    ({ id, data }) => {
      const locale = id.split("/")[0];

      return (
        (draft || !data.draft) &&
        (!allowedLocales.length ||
          allowedLocales.includes(locale as SupportedLocales[number]))
      );
    }
  );

  return posts.map(post => {
    const postCopy = { ...post };

    const slugParts = post.slug.split("/");
    postCopy.slug = (
      slugParts.length ? slugParts[slugParts.length - 1] : post.slug
    ) as typeof post.slug;

    return postCopy;
  });
};

type groupPostsByLocaleOptions = {
  allowedLocales?: SupportedLocales;
};

export const groupPostsByLocale = (
  posts: CollectionEntry<"blog">[],
  { allowedLocales = [] }: groupPostsByLocaleOptions = {}
) => {
  const postsByLocale = posts.reduce(
    (acc, post) => {
      const locale = post.id.split("/")[0];
      return {
        ...acc,
        [locale]: [...(acc[locale] || []), post],
      };
    },
    {} as Record<string, CollectionEntry<"blog">[]>
  );

  if (!allowedLocales.length) {
    return postsByLocale;
  }

  const filteredPostsByLocale = Object.fromEntries(
    Object.entries(postsByLocale).filter(([locale]) =>
      allowedLocales.includes(locale as SupportedLocales[number])
    )
  );

  const result: Record<string, CollectionEntry<"blog">[]> = {};

  for (const locale of allowedLocales) {
    result[locale] = postsByLocale[locale] || [];
  }

  return { ...result, ...filteredPostsByLocale };
};

export const createStaticPathsByLocale = (
  localeToPosts: Record<string, CollectionEntry<"blog">[]>,
  { defaultLocale }: CreateStaticPathsByLocaleOptions = {}
) =>
  Object.entries(localeToPosts).map(([locale, posts]) => ({
    params: {
      locale: locale === defaultLocale ? undefined : locale,
    },
    props: {
      posts,
    },
  }));

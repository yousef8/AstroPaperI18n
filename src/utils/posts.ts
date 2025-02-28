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

export const getPostsStaticPathsGroupedByLocale = async (
  options: GetPostsStaticPathsGroupedByLocaleOptions = {}
) => createStaticPathsByLocale(await getPostsGroupedByLocale(options), options);

export const getPostsGroupedByLocale = async (options: GetPostsOptions = {}) =>
  groupPostsByLocale(await getPosts(options));

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

export const groupPostsByLocale = (posts: CollectionEntry<"blog">[]) =>
  posts.reduce(
    (acc, post) => {
      const locale = post.id.split("/")[0];
      return {
        ...acc,
        [locale]: [...(acc[locale] || []), post],
      };
    },
    {} as Record<string, CollectionEntry<"blog">[]>
  );

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

import * as Prismic from "@prismicio/client";

export const client = Prismic.createClient(
  `${process.env.PRISMIC_ENVIRONMENT}`,
  {
    accessToken: `${process.env.VITE_PRISMIC_ACCESS_TOKEN}`,
  }
);

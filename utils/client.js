import sanityClient from "@sanity/client";
import config from "./config";
const client = sanityClient({
  projectId: config.projectId,
  dataset: config.dataset,

  apiVersion: "2022-10-07",
  useCdn: true,
  token: process.env.SANITY_AUTH_TOKEN,
});
export default client;

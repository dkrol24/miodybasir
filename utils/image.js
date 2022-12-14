import ImageUrlBuilder from "@sanity/image-url";
import client from "./client";

function urlForThumbnail(source) {
  return ImageUrlBuilder(client).image(source).width(550).height(550).url();
}

function urlFor(source) {
  return ImageUrlBuilder(client).image(source).width(550).height(550).url();
}

export { urlFor, urlForThumbnail };

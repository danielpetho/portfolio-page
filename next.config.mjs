// @ts-check
import withPlaiceholder from "@plaiceholder/next";
 
/**
 * @type {import('next').NextConfig}
 */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.graphassets.com",
        port: "",
      },
    ],
  },
};


export default withPlaiceholder(config);

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "in.artoncapital.com",
        // allow any images under /wp-content (uploads, plugins, etc.)
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "www.artoncapital.com",
        // this fixes the Passport Index logo + all other WP images
        pathname: "/wp-content/**",
      },
      {
        protocol: "https",
        hostname: "artoncapital.com",
        pathname: "/wp-content/**",
      },
      // if you later start pulling images from your own cloned host,
      // just add patterns like this:
      // {
      //   protocol: "https",
      //   hostname: "www.artoncapitals.com",
      //   pathname: "/wp-content/**",
      // },
    ],
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pfp-public-productdb-api.azurewebsites.net",
                port: "",
                pathname: "/api/picture/**",
            },
        ],
    },
};

module.exports = nextConfig;

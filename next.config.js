/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "cdn.imagin.studio"
            
            }
        ]
    }
};

module.exports = nextConfig;

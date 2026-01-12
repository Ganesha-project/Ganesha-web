/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    devIndicators: false,
    env: {
        APIURL: process.env.NEXT_PUBLIC_APIURL,
    },
    images: {
        domains: ["res.cloudinary.com"],
        // unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "picsum.photos",
            },
            {
                protocol: "https",
                hostname: "media.istockphoto.com",
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "source.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "source.unsplash.com/random/?people",
            },
            {
                protocol: "https",
                hostname: "media.cnn.com",
            },
            {
                protocol: "https",
                hostname: "akcdn.detik.net.id",
            },
            {
                protocol: "https",
                hostname: "plus.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "cms-ganesha.ganeshaconsulting.co.id",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337", 
                pathname: "/uploads/**", 
            },
        ],
    },
};

export default nextConfig;

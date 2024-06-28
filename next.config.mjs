/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    optimizeFonts: true,
    env: {
        APIURL: process.env.NEXT_PUBLIC_APIURL,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.freepik.com",
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
                protocol: "http",
                hostname: "localhost",
                port: "1337", // Tambahkan port jika diperlukan
                pathname: "/uploads/**", // Pastikan pathname sesuai dengan struktur URL
            },
        ],
    },
};

export default nextConfig;

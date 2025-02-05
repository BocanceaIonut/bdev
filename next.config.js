/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // If you're using images, you might need:
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    // Remove basePath if you're using a custom domain
    // basePath: '',
}

module.exports = nextConfig
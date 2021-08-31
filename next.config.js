/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  env: {
    CLOUDINARY_URL: 'https://res.cloudinary.com/devsahaaya/image/upload/v1630381180/images',
  },
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sweeties672-4f600.appspot.com',
      },
    ],
  },
  env: {
    API_KEY: 'AIzaSyAkV3WOeVsvHg3pDv1DH7eydbAmsA3jb7E',
    AUTH_DOMAIN: 'sweeties672-4f600.firebaseapp.com',
    PROJECT_ID: 'sweeties672-4f600',
    STORAGE_BUCKET: 'sweeties672-4f600.appspot.com',
    MESSAGING_SENDER_ID: '774831250273',
    APP_ID: '1:774831250273:web:0d42929575249384fa0320',
    MEASUREMENT_ID: 'G-38JVB6VB12',
  },
}

module.exports = nextConfig

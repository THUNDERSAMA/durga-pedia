// /** @type {import('next').NextConfig} */
// const withPWA=require ('next-pwa');
// const nextConfig = {
//     pwa:{
//         dest:"public",
//         register:true,
//         skipWaiting:true,
//         disable:process.env.NODE_ENV === 'development'
//     }
// }

// module.exports = withPWA(nextConfig)
const withPWA = require('next-pwa')({
    dest:"public",
    register:true,
    skipWaiting:true,
    disable:process.env.NODE_ENV === 'development'
      })
    
    /** @type {import('next').NextConfig} */
    const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['openweathermap.org'],
    }, 
     }
    
    module.exports = withPWA(nextConfig);

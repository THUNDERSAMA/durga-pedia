// This file was automatically added by edgio init.
// You should commit this file to source control.
const { withEdgio } = require('@edgio/next/config')

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
    output: 'export'
 }

const _preEdgioExport = withPWA(nextConfig);;

module.exports = (phase, config) =>
  withEdgio({
    ..._preEdgioExport
  })

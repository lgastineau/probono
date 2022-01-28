module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        secret: 'AC4DFFEFBEA6355F994D29832D1C4729B89D9F4A21EB0023E6155315828A7B8F'
    },
    publicRuntimeConfig: {
        apiUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/api' // development api
            : 'http://localhost:3000/api' // production api
    }
}
export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api",
    saltWorkFactor: 12,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    privateKey: process.env.PRIVATE_KEY,
    publicKey: process.env.PUBLIC_KEY
}

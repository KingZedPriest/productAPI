export default {
    port: 1337,
    dbUri: "mongodb://localhost:27017/rest-api",
    saltWorkFactor: 12,
    accessTokenTtl: "15m",
    refreshTokenTtl: "1y",
    publicKey: `-----BEGIN PUBLIC KEY-----
    MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGqtPuccyOw0kkX6dpBgFCMTJ2JK
    wwNZSjEMXY5qc9tRxqm2e1thU8rQYLj6cMZIiTEixDNx5EjQ1YjfUpcCfehT6nH8
    G+1MTS9S70lzxVdJH2AoQILAwxKiMxXjlmQNDgzgsiE6URY2YyybyrzK4QWtuzU2
    nA2kXVZBASMoKcvvAgMBAAE=
    -----END PUBLIC KEY-----`,
    privateKey: `-----BEGIN RSA PRIVATE KEY-----
    MIICWwIBAAKBgQCChqOpNiWnFrvUfRfhRR6bp98H6GpOj62x83fSU8+Le2Iixkqq
    JStW2ZIMEXNUhzOZ9Nhi1KzWyn0OpCParVv6LU1EqiHUbS1fBr79ddVu7+3cmUdd
    CERuVT2ebhqGN52G7pgolmmGZ/UFLhc0WNteu7R5SkeHvMIb/oogHRvbGQIDAQAB
    AoGAKxK5UW6/8CrNYyrAxaMknaNBM3/cDP7XCAFbSjpEJDhcQzOCkjFf4vI7guYD
    VCKlwamN+tdKDjuWF03NUy2gSypTJnX9b0f/YHko1qn4Nw7FWI+Sa3RZPb+yjJ4e
    WvS4p1vDs7XiAyV0HBDpJZiuMLqR4/juFYPXiljEZKkNkX0CQQDyKFKTdVSfGCY8
    6cfrC4DelHdRBUYmeVrJHwRfJJiMNNaNXMn0zVhVbQHVpTNZovYwL8VN6fdCVxOD
    3i7MOYdvAkEAify500xtLiIAEhsxIRLPdRJVeAtp6Ow7FXYcAnL/cqqt+9jI9+3d
    /TvAqsgHlJU0v7Zje+7JthOB+JjqWblB9wJAF2Z4HFHBPKJ7x3Ub4YW6DUgxg33L
    +pnNgRPjO0JxD1NnzD9EMMjLGW4wODH/lVDfE2b6XP4X66w4cYy93vRMNwJAEdZx
    zzbaBlSu3ahWOYhM+T1dfx86mbmwCZ4zEL38973Ir/3ePO6q+8l1pp4lHLgNEZtq
    UOMVgEwVSSW7Zc3lEQJAJoY9abgTDsoeuhBKoNQbvpUd66XuCMihKbVaboPpwktf
    7+KfRpKrTWlAZKtFfZLtLLms8vlBFnRxXCuCTz0YTA==
    -----END RSA PRIVATE KEY-----`
}
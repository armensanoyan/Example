module.exports = {
  env: {
    NEXT_PUBLIC_JWT_SECRET: "b215bG92ZWx5dG9rZW4=",
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_JWT_SECRET: "b215bG92ZWx5dG9rZW4=",
    API_JWT_SECRET: process.env.API_JWT_SECRET,
  },
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: "my Balls",
    NEXT_PUBLIC_JWT_SECRET: "b215bG92ZWx5dG9rZW4=",
    secondSecret: process.env.JWT_SECRET, // Pass through env variables
  },
};

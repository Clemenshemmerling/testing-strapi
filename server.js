// config/server.js

// This config is used both in `strapi build` and `strapi start`.
// So if we have a path prefix to the api, such as /production /v1,
// we need to use env variables to configure, as Strapi doesn't
// support path prefixes automagically.

module.exports = ({ env }) => {
  let url = env('BACKEND_URL');

  return {
    host: env('HOST'),
    port: env.int('PORT'),
    url,
    admin: {
      serveAdminPanel: false, // No admin panel
      autoOpen: false,
      url: '/',
      auth: {
        secret: env('ADMIN_JWT_SECRET'),
      },
    },
  };
};

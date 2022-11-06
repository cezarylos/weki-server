module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2ce21d49eee4f8e91b48f22d84a723b7'),
  },
});

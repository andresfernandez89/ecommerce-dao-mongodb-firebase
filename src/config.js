const { private_key } = JSON.parse(process.env.FIREBASE_PRIVATE_KEY);
export default {
  fileSystem: {
    path: "./DB",
  },

  mongoDB: {
    cnx: "mongodb://127.0.0.1:27017/ecommerce",
    options: {
      serverSelectionTimeoutMS: 5000,
    },
  },
  firebase: {
    type: process.env.FIREBASE_TYPE,
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
    private_key,
    client_email: process.env.FIREBASE_CLIENT_EMAIL,
    client_id: process.env.FIREBASE_CLIENT_ID,
    auth_uri: process.env.FIREBASE_AUTH_URI,
    token_uri: process.env.FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER,
    client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URI,
  },
};

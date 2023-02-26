/* eslint-disable @typescript-eslint/no-non-null-assertion */
const { CONNECTION_STRING, AUTH_SECRET, PORT } = process.env;

export default {
    port: parseInt(PORT || '8000', 10),
    connectionString: CONNECTION_STRING!,
    authSecret: AUTH_SECRET!
};

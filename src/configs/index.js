const environ = require ('./dotenv.js');


environ.init ();
module.exports = {
    environment: process.env.NODE_ENV,
    secretKey: '',
    server: {
        host: process.env.NODE_HOST,
        port: process.env.NODE_PORT
    }, 
    db: {
        client: process.env.DB_CONNECTION,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        name: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD
    }
};
const app = require ('./express.js');
const { server } = require ('./configs');


app.listen (server.port, server.host, function (error) {
    if (error) {
        console.log (`Oops! Unable to listen on: ${server.host}:${server.port}.`);
        console.log (error.stack);
        process.exit (10);
    }
    
    console.log (`Server is now listening on ${server.host}:${server.port} ...`);
});
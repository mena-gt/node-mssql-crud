
const express = require ('express');
const morgan = require ('morgan');
const path = require ('path');
const cors = require('cors');

const { environment } = require ('./configs');
const { NotFound } = require ('./utils').error;
const apiRouter = require ('./api');
const { error } = require ('./middlewares');


const app = express ();

app.use (express.urlencoded ({ extended: true }));
app.use (express.json ());

app.use(cors());

if ('develop' === environment) {
    app.use (
        morgan (
            ':method :url :status :response-time ms - :res[content-length]'
        )
    );
}

/** Routing **/
app.use ('/api', apiRouter);
app.use ('/', (request, response, next) => {
    next (new NotFound ('404 Page not found!', ''));
});

/** Error-handling middlewares **/
app.use (error.handler);

process.on ('unhandledRejection', (error, promise) => {
    console.log ('Unhandled rejection at: ');
    console.log (promise);
    console.log ('\nReason: ');
    console.log (error);
    process.exit (1);
});

process.on ('uncaughtException', (error) => {
    console.log ('Uncaught Exception: ');
    console.log (error);
    process.exit (1);
});

module.exports = app;
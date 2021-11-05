const mssql = require ('mssql');

const {db} = require ('../src/configs');

const settings = {
    server: db.host,
    database: db.name,
    user: db.username,
    password: db.password,
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
};

const test = async () => {
    try {
        const pool = await mssql.connect (settings);
        const result = await pool.request ().query ("SELECT 1")
        console.log (result);
    } catch (err) {
        console.log (err);
    }
};

test ();
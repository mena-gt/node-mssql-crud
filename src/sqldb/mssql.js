const mssql = require ('mssql');

const { db } = require ('../configs');


const settings = {
    server: db.host,
    port: db.port,
    database: db.name,
    user: db.username,
    password: db.password 
};

const pool = () => {
    return mssql.connect (settings);
};

module.exports = {
    pool
};

/*
const baseQuery = (text, params) => {
    return new Promise ((resolve, reject) => {
        pool.getConnection ()
            .then ((conn) => conn.query (text, params))
            .then ((rows) => {
                delete rows.meta;
                resolve (rows);
            })
            .catch ((err) => reject (err));
    });
};

module.exports = {
    exists: (text, params) => {
        return new Promise ((resolve, reject) => {
            baseQuery (text, params)
                .then ((result) => {
                    resolve (result.length > 0 ? true : false);
                })
                .catch (err => reject (err));
        });
    },
    select: (text, params) => {
        return new Promise ((resolve, reject) => {
            baseQuery (text, params)
                .then ((result) => resolve (result))
                .catch (err => reject (err));
        });
    },
    iud: (text, params) => {
        return new Promise ((resolve, reject) => {
            baseQuery (text, params)
                .then ((result) => {
                    if ('affectedRows' in result && 
                        result.affectedRows > 0) {
                        resolve ({
                            affectedRows: result.affectedRows,
                            insertId: result.insertId
                        });
                    } else {
                        reject (result);
                    }
                })
                .catch (err => reject (err));
        });
    }
}*/
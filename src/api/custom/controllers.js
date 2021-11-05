// const service = require ('./services');
// const { validateProduct } = require ('./validations.js');
// const { product } = require ('../../sqldb');
/*const { Created,
        Deleted,
        Resource,
        Listing,
        Updated } = require ('../../utils').response;*/
const {db} = require ('../../memdb');

const create = async (req, res, next) => {
    try {
        const { name, email } = req.body;
        let code = Number (db[db.length - 1].code) + 1;
        db.push ({ code: `${code}`, name: name, email: email })
        return res.json ({
            customs: db
        });
        /*const dTO = await validateProduct (
            req.body.name, 
            req.body.description, 
            req.body.parent
        );

        const repo = new product.ProductSQLDBRepo ();
        const result = await service.create (repo, dTO);

        const httpResponse = new Created ({ product: result });
        return res.status (httpResponse.statusCode ())
            .json (httpResponse.toJson ());*/
    } catch (err) {
        next (err);
    }
};

const getAll = async (req, res, next) => {
    try {
        return res.json ({
            customs: db
        });
        /*const repo = new product.ProductSQLDBRepo ()
        const result = await service.fetchAll (repo);
               
        const httpResponse = new Listing ({ products: result });
        return res.status (httpResponse.statusCode ())
            .json (httpResponse.toJson ());*/
    } catch (err) {
        next (err);
    }
}

const update = async (req, res, next) => {
    try {
        const { codeorid } = req.params;
        const { name, email } = req.body;

        console.log (codeorid, name, email)

        const position = db.findIndex ((item) => item.code === codeorid)
        console.log ('position: ', position)

        db[position].name = name;
        db[position].email = email;

        return res.json ({
            customs: db
        })
        /*const dTO = {
            name: req.body.name,
            description: req.body.description,
            parent: req.body.parent,
            code: req.params.code_or_id
        };
        
        const repo = new product.ProductSQLDBRepo ()
        const result = await service.update (repo, dTO)
        
        const httpResponse = new Updated ({ product: result });
        return res.status (httpResponse.statusCode ())
            .json (httpResponse.toJson ());*/
    } catch (err) {
        next (err);
    }
}

const getOne = async (req, res, next) => {
    try {
        const { codeorid } = req.params;
        const custom = db.find ((item) => item.code === codeorid)
        // comprobar que exista
        return res.json ({
            custom: custom
        });
        /*const dTO = {
            code: req.params.code_or_id
        };
        
        const repo = new product.ProductSQLDBRepo ()
        const result = await service.fetchOne (repo, dTO)
        
        const httpResponse = new Resource ({ product: result });
        return res.status (httpResponse.statusCode ())
            .json (httpResponse.toJson ());*/
    } catch (err) {
        next (err);
    }
}

const remove = async (req, res, next) => {
    try {
        const { codeorid } = req.params;
        const position = db.findIndex ((item) => item.code === codeorid)
        db.splice (position, 1);
        return res.json ({
            customs: db
        });
        /*const dTO = {
            code: req.params.code_or_id
        };
        
        const repo = new product.ProductSQLDBRepo ()
        const result = await service.remove (repo, dTO);
        
        const httpResponse = new Deleted ();
        return res.status (httpResponse.statusCode ())
            .json (httpResponse.toJson ()); */
    } catch (err) {
        next (err);
    }
}

module.exports = {
    create,
    getAll,
    getOne,
    remove,
    update
};
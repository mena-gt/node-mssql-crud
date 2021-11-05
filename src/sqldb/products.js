const { ProductRepository } = require ('../api/products/repository.js');
const { pool } = require ('./mssql.js')


class ProductMsSQLRepository extends ProductRepository {
    constructor (q = pool) {
        this.q = pool;
    }

    selectAll () {
        this.q ().request ()
    }

    
}
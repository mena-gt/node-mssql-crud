const { CustomError } = require ('../utils').error;


const handler = (error, req, res, next) => {
    if (error instanceof CustomError) {
        return res
            .status (error.statusCode ())
            .json (error.toJson ());
    } 
    else {
        console.log ('Error:');
        console.log ('................................');
        console.log (error.stack);
        return res.status (500)
            .json ({
                success: false,
                message: error.message
            });
    }
};

module.exports = {
    handler
}
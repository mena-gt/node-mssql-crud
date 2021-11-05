
class CustomError extends Error {
    constructor (description, details) {
        super (description);
        this.description = description;
        this.details = details;
    }

    statusCode () {
        if (this instanceof BadRequest) return 400;
        if (this instanceof NotFound) return 404;
        if (this instanceof Forbidden) return 403;
        return 500;
    }

    toJson () {
        return {
            success: false,
            message: this.description,
            error: this.details
        }
    }
}

class BadRequest extends CustomError {}
class NotFound extends CustomError {}
class Forbidden extends CustomError {}

module.exports = {
    BadRequest,
    CustomError,
    NotFound,
    Forbidden
};
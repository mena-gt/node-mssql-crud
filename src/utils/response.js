
class Response {
    constructor (description, data) {
        this.description = description;
        this.data = data;
    }

    statusCode () {
        return 200;
    }

    toJson () {
        return {
            success: true,
            message: this.description,
            data: this.data
        }
    }
}

class Created extends Response {
    constructor (data) {
        super ('Resource created successfully.', data);
    }
}

class Listing extends Response {
    constructor (data) {
        super ('List of all available resources.', data);
    }
}

class Resource extends Response {
    constructor (data) {
        super ('Resource found successfully.', data);
    }
}

class Deleted extends Response {
    constructor () {
        super ('Resource was deleted successfully.', '');
    }
}

class Updated extends Response {
    constructor (data) {
        super ('Resource updated successfully.', data);
    }
}

module.exports = {
    Created,
    Deleted,
    Resource,
    Listing,
    Updated
}

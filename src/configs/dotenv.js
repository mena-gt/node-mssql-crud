const dotEnv = require ('dotenv');
const path = require ('path');


const enviroments = {
    'develop': '.develop',
    'testing': '.testing',
    'production': '.prod'
};

module.exports = {
    init: function () {
        const currentEnv = process.env.NODE_ENV || 'develop';
        const filepath = `${path.join (__dirname, '..', '..', 'env', enviroments[currentEnv])}`;
        let result = dotEnv.config ({
            path: filepath
        });

        if (result.error) {
            throw Error (`The "${filepath}" file not found!`);
        }
    }
};
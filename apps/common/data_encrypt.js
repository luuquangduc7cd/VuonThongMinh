const bcrypt = require("bcrypt");
const config = require("config");

function hashPassword(password) {
    let saltRounds = config.get("salt");
    let salt = bcrypt.genSaltSync(saltRounds);
    let hash = bcrypt.hashSync(password, salt);
    return hash;
}

module.exports = {
    hashPassword: hashPassword
}
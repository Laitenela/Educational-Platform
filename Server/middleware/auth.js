const config = require("../config/config");
const jwt = require('jsonwebtoken')

exports.verifyUserToken = (req, res, next) => {
    let token = req.cookies['auth-token'];
    try {
        req.user = jwt.verify(token, config.TOKEN_SECRET); 
        next();
    } catch (error) {
        next();
    }

}
exports.IsUser = async (req, res, next) => {
    if (req.user.user_type_id === 0) {
        return next();
    }
    return next();   
}
exports.IsAdmin = async (req, res, next) => {
    if (req.user.user_type_id === 1) {
        return next();
    }
    return next();

}
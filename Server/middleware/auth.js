const config = require("../config/config");
const jwt = require('jsonwebtoken')

exports.verifyUserToken = (req, res, next) => {
    try{
        let token = req.cookies['auth-token'];
        req.user = jwt.verify(token, config.TOKEN_SECRET);
    } catch {

    }
    next();

    // try {
    //     req.user = jwt.verify(token, config.TOKEN_SECRET);
    //     next();
    // } catch (error) {
    //     req.user = {id: '651e72a4fd6c3ef62b982942'};
    //     console.log('Token is Not Verified');
    //     next();
    // }
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
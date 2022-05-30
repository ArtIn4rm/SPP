const ApiError = require('../errors/apiError')
const jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
    if(req.method === 'OPTIONS'){
        next()
    }
    try{
        const token = req.headers.authorization.split(' ')[1]
        if(!token){
            return next(new ApiError.unauthorized('user is not authorized'))
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    }catch(e){
        return next(new ApiError.unauthorized('user is not authorized'))
    }
}
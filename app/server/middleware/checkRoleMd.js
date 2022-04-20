const ApiError = require('../errors/apiError')
const jwt = require('jsonwebtoken')

module.exports = function(roles){
    return function (req, res, next) {
        if(req.method === 'OPTIONS'){
            next()
        }
        try{
            const token = req.headers.authorisation.split(' ')[1]
            if(!token){
                return next(new ApiError.unauthorized('user is not authorized'))
            }
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            let isMatch = roles.some((role) => {
                return role === decoded.role
            });
            if(!isMatch){
                return next(new ApiError.forbidden('you don\'t have access'))
            }
            req.user = decoded
            next()
        }catch(e){
            return next(new ApiError.unauthorized('user is not authorized'))
        }
    }
}
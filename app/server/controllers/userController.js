const ApiError = require('../errors/apiError')

class UserController{
    async registrate(req, res){

    }

    async login(req, res){

    }

    async auth(req, res){
        //..../auth?id=5
        const {id} = req.query
        if(!id){
            return next(ApiError.badRequest('id not entered'))
        }
        //todo
    }
}

module.exports = new UserController()
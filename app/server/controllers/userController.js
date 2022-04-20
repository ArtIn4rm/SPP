const ApiError = require('../errors/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtocken')
const {User} = require('../models/model')

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController{
    async registrate(req, res, next){
        const {email, password, role, info} = req.body
        if(!email || !password || !role){
            return next(ApiError.badRequest("not correct data"))
        }
        const candidate = await User.findOne({where: {email}})
        if(candidate){
            return next(ApiError.badRequest("email is using"))
        }
        let hashPassword = await bcrypt.hash(password, 5)
        let user
        //todo
        const token = generateJwt(user.id, email, role)
        return res.json({token})
    }

    async login(req, res, next){
        const {email, password} = req.body
        let user = await User.findOne({where: {email}, include:[{model: Role}]})
        if(!user){
            return next(ApiError.badRequest('user with this email not found'))
        }
        let cmp = bcrypt.compareSync(password, user.password)
        if(!cmp){
            return next(ApiError.badRequest('password not correct'))
        }
        const token = generateJwt(user.id, email, user.Role.name)
        return res.json({token})
    }

    async auth(req, res){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
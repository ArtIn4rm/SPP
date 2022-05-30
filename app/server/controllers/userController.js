const ApiError = require('../errors/apiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {User, Role, User_status, Personality, Street, City, Company, Person, Borrower, Financial_reporting} = require('../models/model')

const generateJwt = (id, email, role) => {
    return jwt.sign({id, email, role}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController{
    async registrate(req, res, next){
        const {info} = req.body
        if(!info){
            return next(ApiError.badRequest("not correct data"))
        }
        const candidate = await User.findOne({where: {email: info.email}})
        if(candidate){
            return next(ApiError.badRequest("email is using"))
        }
        let hashPassword = await bcrypt.hash(info.password, 5)

        let roleId
        if(info.type){
            roleId = await Role.findOne({where: {name: "Company"}})
            if(!roleId){
                roleId = await Role.create({name: "Company"})
            }
        } else {
            roleId = await Role.findOne({where: {name: info.role}})
            if(!roleId){
                roleId = await Role.create({name: info.role})
            }
        }

        let statusId = await User_status.findOne({where: {name: "Authorized"}})
        if(!statusId){
            statusId = await User_status.create({name: "Authorized"}, {fields: ['name']})
        }

        let cityId = await City.findOne({where: {name: info.city}})
        if(!cityId){
            cityId = await City.create({name: info.city})
        }

        let streetId = await Street.findOne({where: {name: info.street}})
        if(!streetId){
            streetId = await Street.create({name: info.street})
        }

        let personalityId = await Personality.create({passport_number: info.num, passport_seria: info.seria,
            building: info.building, name: info.name, surname: info.surname, streetId: streetId.id, cityId: cityId.id
        })

        let user = await User.create({roleId: roleId.id, userStatusId: statusId.id, email: info.email, 
            password: hashPassword, personalityPassportNumber: personalityId.passport_number
        })
        
        let borrower = await Borrower.create({balance: 0, payment_account: info.account, userId: user.id})

        if(!info.type){
            let person = await Person.create({working_place: " ", accounting_feedback: " ", occupied_position: " ",
                income_per_month: 0, borrowerId: borrower.id
            }
        )
        } else {
            let fin = await Financial_reporting.create({average_income_per_month: 0, tax_payment_per_year: 0})
            let company = await Company.create({name: info.type.company, financialReportingId: fin.id, 
                is_small_business: true, registration_id: info.type.id, borrowerId: borrower.id
            })
        }

        const token = generateJwt(user.id, info.email, info.role)
        return res.json({token, id: borrower.id})
    }

    async login(req, res, next){
        const {email, password} = req.body
        let user = await User.findOne({where: {email}})
        let role = await Role.findOne({where: {id: user.roleId}})

        let borrower = await Borrower.findOne({where: {userId: user.id}})

        if(!user){
            return next(ApiError.badRequest('user with this email not found'))
        }
        let cmp = bcrypt.compareSync(password, user.password)
        if(!cmp){
            return next(ApiError.badRequest('password not correct'))
        }
        const token = generateJwt(user.id, email, role.name)
        return res.json({token, id: borrower.id})
    }

    async auth(req, res){
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()
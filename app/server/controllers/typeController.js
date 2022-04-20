const ApiError = require('../../errors/apiError')
const {Borrower_level, Credit, Credit_request, Message, Street, City, 
    User, Type, Role} = require('../../models/model')

class TypeController{
    async getAll(req, res){
        let types = await Type.findAll({include:[{model: Borrower_level}]})
        return res.json(types)
    }

    async getById(req, res){
        let {id} = req.params
        let type = await Type.findOne({where: {id}, include:[{model: Borrower_level}]})
        return res.json(type)
    }

    async addCredit(req, res){
        let info = req.query
        let credit = await Credit.create({aim: info.aim, price: info.price, months_to_pay: info.mtp, 
            agreed_proc_per_month: info.proc, is_active: false, other_conditions: info.others,
            typeId: info.type, borrowerId: info.borrowerId})
        Credit_request.create({borrowerId: info.borrowerId, creditId: credit.id})
        return res
    }
}

module.exports = new TypeController()
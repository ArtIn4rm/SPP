const ApiError = require('../errors/apiError')
const {
    Borrower_level,
    Credit,
    Credit_request,
    Message,
    Street,
    City,
    User,
    Type,
    Role
} = require('../models/model')

class TypeController {
    async getAll(req, res) {
        let types = await Type.findAll({ include: [{ model: Borrower_level }] })
        return res.json(types)
    }

    async getById(req, res) {
        let { id } = req.params
        let type = await Type.findOne({ where: { id }, include: [{ model: Borrower_level }] })
        return res.json(type)
    }

    async addCredit(req, res) {
        let {price, time, procent, aim, conditions, typeName, id} = req.body

        let type = await Type.findOne({ where: {name: typeName}})
        if(!type){
            let level = await Borrower_level.findOne({ where: {id: 1}})

            if(!level){
                level = await Borrower_level.create({name: "Guarantor"})
            }
            type = await Type.create({ name: typeName, proc_per_year_upper: 0.0, 
                proc_per_year_lower: 0.0, max_price: 1000, down_payment_proc: 0.0, borrowerLevelId: level.id
            })
        }
        
        let credit = await Credit.create({
            aim: aim,
            price: price,
            months_to_pay: time,
            agreed_proc_per_month: procent,
            is_active: false,
            other_conditions: conditions,
            typeId: type.id,
            borrowerId: id
        })
        Credit_request.create({ borrowerId: id, creditId: credit.id })
        return res
    }
}

module.exports = new TypeController()
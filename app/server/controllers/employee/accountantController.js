const ApiError = require('../../errors/apiError')
const {Message, Credit, Borrower, Active_credit, Type, Overdue_credit} = require('../../models/model')
const limit = process.env.LIMIT

class AccountantController{
    async getReport(req, res){}

    async sendMessage(req, res, next){
        let {borrowerId} = req.params
        let {fromId, message} = req.body
        if(!page || !toId || !message){
            return next(ApiError.badRequest('not correct params'))
        }
        Message.create({from_who: fromId, message_text: message, borrowerId: borrowerId})
        return res
    }

    async areqNext(req, res, next){
        let {page} = req.params
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (++page) * limit - limit
        let activeCredits = await Active_credit.findAll({order: ['createdAt', 'DESC'],
            limit, offset, include: {model: Credit}})
        let types = []
        await Promise.all(activeCredits.map(async (credit) => {
            let type = await Type.findOne({where: {id: credit.Credit.typeId}, include:[{model: Borrower_level}]})
            types.push(type)
        }))
        return res.json([activeCredits, types])
    }

    async areqPrev(req, res, next){
        let {page} = req.params
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (--page) * limit - limit
        let activeCredits = await Active_credit.findAll({order: ['createdAt', 'DESC'],
            limit, offset, include: {model: Credit}})
        let types = []
        await Promise.all(activeCredits.map(async (credit) => {
            let type = await Type.findOne({where: {id: credit.Credit.typeId}, include:[{model: Borrower_level}]})
            types.push(type)
        }))
        return res.json([activeCredits, types])
    }

    async areqById(req, res){
        const {id} = req.params
        let credit = await Credit.findOne({where: {id}, include:[{model: Borrower}]})
        return res.json(credit)
    }

    async areqActivate(req, res){
        const {id} = req.params
        let activeCredit = await Active_credit.findOne({where: {id}, include:[{model: Credit}]})
        Credit.update({is_active: true}, {activation_time: activeCredit.createdAt}, {where: {id: activeCredit.creditId}})
        return res
    }

    async overdueNext(req, res, next){
        let {page} = req.params
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (++page) * limit - limit
        let overdueCredits = await Overdue_credit.findAll({order: ['createdAt', 'DESC'],
            limit, offset, include: {model: Credit}})
        let types = []
        await Promise.all(overdueCredits.map(async (credit) => {
            let type = await Type.findOne({where: {id: credit.Credit.typeId}, include:[{model: Borrower_level}]})
            types.push(type)
        }))
        return res.json([overdueCredits, types])
    }

    async overduePrev(req, res, next){
        let {page} = req.params
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (--page) * limit - limit
        let overdueCredits = await Overdue_credit.findAll({order: ['createdAt', 'DESC'],
            limit, offset, include: {model: Credit}})
        let types = []
        await Promise.all(overdueCredits.map(async (credit) => {
            let type = await Type.findOne({where: {id: credit.Credit.typeId}, include:[{model: Borrower_level}]})
            types.push(type)
        }))
        return res.json([overdueCredits, types])
    }

    async overdueById(req, res){
        const {id} = req.params
        let credit = await Credit.findOne({where: {id}, include:[{model: Borrower}]})
        return res.json(credit)
    }
}

module.exports = new AccountantController()
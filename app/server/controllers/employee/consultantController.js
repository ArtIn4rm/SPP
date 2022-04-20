const ApiError = require('../../errors/apiError')
const {Big_company_request, Company_request, Credit_request, Message, Company, Financial_reporting, Credit,
    Borrower, User, Personality, Type, Potential_credit_request} = require('../../models/model')
const limit = process.env.LIMIT

class ConsultantController{
    async sendMessage(req, res, next){
        let {borrowerId} = req.params
        let {fromId, message} = req.body
        if(!page || !toId || !message){
            return next(ApiError.badRequest('not correct params'))
        }
        Message.create({from_who: fromId, message_text: message, borrowerId: borrowerId})
        return res
    }

    async vipreqNext(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (++page) * limit - limit
        let companyRequests = await Big_company_request.findAll({order: ['createdAt', 'DESC'],
         limit, offset, include: {model: Borrower}})
        return res.json(companyRequests)
    }

    async vipreqPrev(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (--page) * limit - limit
        let companyRequests = await Big_company_request.findAll({order: ['createdAt', 'DESC'],
         limit, offset, include: [{model: Borrower}]})
        return res.json(companyRequests)
    }

    async vipreqById(req, res){
        const {id} = req.params
        let vipreqById = await Big_company_request.findOne({where: {id}, include:[{model: Borrower}, {model: Financial_reporting}]})
        return res.json(vipreqById)
    }

    async vipreqCheck(req, res){
        let isCorrect = Math.random() < 0.75
        return res.json(isCorrect)
    }

    async vipreqAnswer(req, res, next){
        let {companyId, requestId, answer} = req.body
        if(!companyId || !requestId){
            return next(ApiError.badRequest('bad request'))
        }
        if(answer){
            await Company.update({is_small_business: false}, {where: {id: companyId}})
        }
        Big_company_request.destroy({where: {id: requestId}})
    }

    async comreqNext(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (++page) * limit - limit
        let companyRequests = await Company_request.findAll({order: ['createdAt', 'DESC'], limit, offset})
        return res.json(companyRequests)
    }

    async comreqPrev(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (--page) * limit - limit
        let companyRequests = await Company_request.findAll({order: ['createdAt', 'DESC'], limit, offset})
        return res.json(companyRequests)
    }

    async comreqById(req, res){
        const {id} = req.params
        let companyRequest = await Company_request.findOne({where: {id}})
        return res.json(companyRequest)
    }

    async comreqCheck(req, res){
        let isCorrect = Math.random() < 0.75
        return res.json(isCorrect)
    }

    async comreqAnswer(req, res){
        const {id, answer} = req.body
        let {name, company_reg_id, borrowerId} = await Company_request.findOne({where: {id}})
        if(answer){
            let {id: finId} = await Financial_reporting.create({average_income_per_month: 0, tax_payment_per_year: 0})
            Company.create({name: name, registration_id: company_reg_id, is_small_business: true,
             borrowerId: borrowerId, financialReportingId: finId})
        }
        Company_request.destroy({where: {id}})
        return res
    }

    async creqNext(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (++page) * limit - limit
        let creditRequests = await Credit_request.findAll({order: ['createdAt', 'DESC'], include: [{model: Credit}, 
            {model: Borrower}], limit, offset})
        let borrowerInfo = []
        await Promise.all(creditRequests.map(async (credit) => {
            let borrower = await User.findOne({where: {id: credit.Borrower.id}, include:[{model: Personality}]})
            borrowerInfo.push(borrower)
        }))
        return res.json([creditRequests, borrowerInfo])
    }

    async creqPrev(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (--page) * limit - limit
        let creditRequests = await Credit_request.findAll({order: ['createdAt', 'DESC'], include: [{model: Credit}, 
            {model: Borrower}], limit, offset})
        let borrowerInfo = []
        await Promise.all(creditRequests.map(async (credit) => {
            let borrower = await User.findOne({where: {id: credit.Borrower.id}, include:[{model: Personality}]})
            borrowerInfo.push(borrower)
        }))
        return res.json([creditRequests, borrowerInfo])
    }

    async creqById(req, res){
        const {id} = req.params
        let creditRequest = await Credit_request.findOne({where: {id}, include: [{model: Credit}, {model: Borrower}]})
        let creditInfo = await Type.findOne({where: {id: creditRequest.Credit.typeId}, include:[{model: Borrower_level}]})
        return res.json([creditRequest, creditInfo])
    }

    async creqAnswer(req, res){
        const {id, answer} = req.body
        let {borrowerId, creditId} = await Credit_request.findOne({where: {id}, include: [{model: Credit}, {model: Borrower}]})
        if(answer){
            Potential_credit_request.create({borrowerId: borrowerId, creditId: creditId})
        }
        Credit_request.destroy({where: {id}})
        return res
    }
}

module.exports = new ConsultantController()
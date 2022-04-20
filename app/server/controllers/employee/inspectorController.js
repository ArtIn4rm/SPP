const ApiError = require('../../errors/apiError')
const {Credit_history, Potential_pledge, Guarantor, M2M_person_guarantor, Company, Person, Credit,
    Borrower, User, Personality, Type, Potential_credit_request, Borrower_level, Financial_reporting,
    Income, Active_credit} = require('../../models/model')
const limit = process.env.LIMIT

class InspectorController{
    async preqNext(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (++page) * limit - limit
        let potentialCreditRequests = await Potential_credit_request.findAll({order: ['createdAt', 'DESC'], include: [{model: Credit}, 
            {model: Borrower}], limit, offset})
        let borrowerInfo = []
        await Promise.all(potentialCreditRequests.map(async (credit) => {
            let borrower = await User.findOne({where: {id: credit.Borrower.id}, include:[{model: Personality}]})
            borrowerInfo.push(borrower)
        }))
        return res.json([potentialCreditRequests, borrowerInfo])
    }

    async preqPrev(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (--page) * limit - limit
        let potentialCreditRequests = await Potential_credit_request.findAll({order: ['createdAt', 'DESC'], include: [{model: Credit}, 
            {model: Borrower}], limit, offset})
        let borrowerInfo = []
        await Promise.all(potentialCreditRequests.map(async (credit) => {
            let borrower = await User.findOne({where: {id: credit.Borrower.id}, include:[{model: Personality}]})
            borrowerInfo.push(borrower)
        }))
        return res.json([potentialCreditRequests, borrowerInfo])
    }

    async preqById(req, res, next){
        const {id} = req.params
        let pcReq = await Potential_credit_request.findOne({where: {id}, include: [{model: Credit}, {model: Borrower}]})
        let creditInfo = await Type.findOne({where: {id: pcReq.Credit.typeId}, include:[{model: Borrower_level}]})
        let isCompany, company, person, guarantors = []
        company = await Company.findOne({where: {borrowerId: pcReq.Borrower.id}})
        if(!company){
            person = await Person.findOne({where: {borrowerId: pcReq.Borrower.id}})
            if(!person){
                return next(ApiError.badRequest('bad request'))
            }
            let m2m_g_p = await M2M_person_guarantor.findAll({where: {personId: person.id}})
            await Promise.all(m2m_g_p.map(async (g_p) => {
                let guarantor = await Guarantor.findOne({where: {id: g_p.guarantorId}, include:[{model: Personality}]})
                guarantors.push(guarantor)
            }))
            isCompany = false
        } else isCompany = true
        let pledge = await Potential_pledge.findAll({where: {borrowerId: pcReq.Borrower.id}})
        return res.json([pcReq, creditInfo, pledge, (!isCompany)?{person, guarantors}:{company}])
    }

    async preqHistory(req, res){
        let {id} = req.params
        let creditHistory = await Credit_history.findAll({where: {borrowerId: id}, include:[{model: Credit}]})
        let types = []
        await Promise.all(creditHistory.map(async (credit) => {
            let type = await Type.findOne({where: {id: credit.Credit.typeId}, include:[{model: Borrower_level}]})
            types.push(type)
        }))
        return res.json([creditHistory, types])
    }

    async preqIncome(req, res){
        let {id} = req.params
        let financialRep = await Financial_reporting.findOne({where: {id}})
        let income = await Income.findAll({where: {financialReportingId: financialRep.id}})
        return res.json([financialRep, income])
    }

    async preqIncomeCheck(req, res){
        let isCorrect = Math.random() < 0.75
        return res.json(isCorrect)
    }

    async preqAnswer(req, res){
        let {id} = req.params
        const {answer} = req.body
        let pcReq = await Potential_credit_request.findOne({where: {id}, include:[{model: Credit}]})
        if(answer){
            Active_credit.create({creditId: pcReq.Credit.id, months_to_pay: pcReq.Credit.months_to_pay,
                price_to_pay: pcReq.Credit.price})
        } else {
            Credit.destroy({where: {id: pcReq.creditId}})
        }
        Potential_credit_request.destroy({where: {id}})
        return res
    }
}

module.exports = new InspectorController()
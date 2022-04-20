const ApiError = require('../../errors/apiError')
const {Income, Big_company_request, Financial_reporting, Message, User, 
    Company, Role} = require('../../models/model')

class CompanyController{
    async getMail(req, res){
        const {id} = req.params
        let messages = await Message.findAll({order: ['createdAt', 'DESC'], where: {borrowerId: id}})
        return res.json(messages)
    }

    async getMessage(req, res){
        const {messageid} = req.params
        let message = await Message.findOne({where: {id}})
        let fromWho = await User.findOne({where: {id: message.from_who}, include:[{model: Role}]})
        return res.json([message, fromWho])
    }

    async getPledge(req, res){
        let {id} = req.params
        let pledge = await Potential_pledge.findAll({where: {borrowerId: id}})
        return res.json(pledge)
    }

    async setPledge(req, res){
        let {isUpdate, borrowerId, price, usedId, name, isEstate} = req.query
        if(isUpdate){
            Potential_pledge.update({where: {id: usedId}}, {is_estate: isEstate}, {name: name},
                {total_price: price})
        } else {
            Potential_pledge.create({borrowerId: borrowerId, name: name,  total_price: price,
                is_estate: isEstate})
        }
        return res
    }

    async getFinancies(req, res){
        let {id} = req.params
        let financialRep = await Financial_reporting.findOne({where: {id}})
        let income = await Income.findAll({where: {financialReportingId: financialRep.id}})
        return res.json([financialRep, income])
    }

    async setFinancies(req, re){
        let info = req.query
        if(info.isChanged){
            Financial_reporting.update({where: {id: info.finId}}, {average_income_per_month: indo.avg})
        }
        Income.create({start_time_diap: info.start, end_time_diap: info.end, net_proceeds: info.net,
            summary_income: info.income, summary_tax_payed: info.taxes, financialReportingId: info.finId})
        return res
    }

    async getTaxes(req, res){
        let {id} = req.params
        let financialRep = await Financial_reporting.findOne({where: {id}})
        let income = await Income.findAll({where: {financialReportingId: financialRep.id}})
        return res.json([financialRep, income])
    }

    async setTaxes(req, res){
        let {id, taxes} = req.query
        Financial_reporting.update({where: {id}}, {tax_payment_per_year: taxes})
        return res
    }

    async sendBCR(req, res){
        let {id} = req.query
        let company = await Company.findOne({where: {borrowerId: id}})
        Big_company_request.create({borrowerId: id, financialReportingId: 
            company.financialReportingId})
        return res
    }
}

module.exports = new CompanyController()
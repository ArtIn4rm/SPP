const ApiError = require('../../errors/apiError')
const {Big_company_request, Company_request, Credit_request} = require('../../models/model')
const limit = process.env.LIMIT

class ConsultantController{
    async sendMessage(req, res){

    }

    async vipreqNext(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (++page) * limit - limit
        let vipRequests = await Big_company_request.findAll({order: ['createdAt', 'DESC'], limit, offset})
        return res.json(vipRequests)
    }

    async vipreqPrev(req, res, next){
        let {page} = req.query
        if(!page){
            return next(ApiError.badRequest('page not entered'))
        }
        let offset = (--page) * limit - limit
        let vipRequests = await Big_company_request.findAll({order: ['createdAt', 'DESC'], limit, offset})
        return res.json(vipRequests)
    }

    async vipreqById(req, res){
        const {id} = req.params
        let vipreqById = await Big_company_request.findOne({where: {id}, include:[{model: Request, as: 'info'}]})
        return res.json(vipreqById)
    }

    async vipreqCheck(req, res){

    }

    async vipreqAnswer(req, res){

    }

    async comreqNext(req, res){

    }

    async comreqPrev(req, res){

    }

    async comreqById(req, res){

    }

    async comreqCheck(req, res){

    }

    async comreqAnswer(req, res){

    }

    async creqNext(req, res){

    }

    async creqPrev(req, res){

    }

    async creqById(req, res){

    }

    async creqAnswer(req, res){

    }
}

module.exports = new ConsultantController()
const ApiError = require('../../errors/apiError')
const {Guarantor, M2M_person_guarantor, Person, Message, Street, City, 
    User, Personality, Role} = require('../../models/model')

class PersonController{
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

    async getIncome(req, res){
        let {id} = req.params
        let person = await Person.findOne({where: {id}})
        return res.json(person)
    }

    async setIncome(req, res){
        let {wrk_place, pos, feedback, income, id} = req.query
        Person.update({where: {id}}, {working_place: wrk_place}, {occupied_position: pos},
            {accounting_feedback: feedback}, {income_per_month: income})
        return res
    }

    async getGuarantor(req, res){
        let {id} = req.params
        let guarantors = []
        let m2m_g_p = await M2M_person_guarantor.findAll({where: {personId: id}})
        await Promise.all(m2m_g_p.map(async (g_p) => {
            let guarantor = await Guarantor.findOne({where: {id: g_p.guarantorId}, include:[{model: Personality}]})
            guarantors.push(guarantor)
        }))
        return res.json(guarantors)
    }

    async setGuarantor(req, res){
        let info = req.query
        let street = await Street.findOne({where: {name: info.street}})
        if(!street){
            street = await Street.create({name: info.street})
        }
        let city = await City.findOne({where: {name: info.city}})
        if(!city){
            city = await City.create({name: info.city})
        }
        await Personality.create({passport_number: info.pNum, passport_seria: info.pSer, 
            building: info.buiding, streetId: street.id, cityId: city.id, name: info.name,
            surname: info.surname})
        await Guarantor.create({passport_number: info.pNum, passport_seria: info.pSer, 
            working_place: info.wrk_place, occupied_position: info.pos, income_per_month: info.income,
            personalityPassportNumber: info.pNum})
        M2M_person_guarantor.create({amount_of_inv_credits: 0, personId: info.id, 
            guarantorId: info.guarantorId})
    }
}

module.exports = new PersonController()
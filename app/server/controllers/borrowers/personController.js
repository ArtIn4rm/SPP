const ApiError = require('../../errors/apiError')
const {Guarantor, M2M_person_guarantor, Person, Message, Street, City, 
    User, Personality, Role, Potential_pledge} = require('../../models/model')

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
        let {borrowerId, price, name, isEstate} = req.body
        console.log({borrowerId, price, name, isEstate})
        Potential_pledge.create({borrowerId: borrowerId, name: name,  total_price: price,
            is_estate: (isEstate === "yes")})
        return res
    }

    async getIncome(req, res){
        let {id} = req.query
        let person = await Person.findOne({where: {borrowerId: id}})

        let pledge = await Potential_pledge.findAll({where: {borrowerId: id}})
        let pledgeParsed = []

        let guarantorsParsed = []

        let m2m_g_p = await M2M_person_guarantor.findAll({where: {personId: person.id}})
        await Promise.all(m2m_g_p.map(async (g_p) => {
            let guarantor = await Guarantor.findOne({where: {id: g_p.guarantorId}})
            guarantorsParsed.push({work: guarantor.working_place, 
                position: guarantor.occupied_position, income: guarantor.income_per_month})
        }))

        pledge.map((i) => {
            pledgeParsed.push({name: i.name, price: i.total_price, estate: i.is_estate})
        })

        return res.json({income: {income: person.income_per_month, feedback: person.accounting_feedback,
            work: person.working_place, position: person.occupied_position
        }, guarantors: guarantorsParsed, pledge: pledgeParsed})
    }

    async setIncome(req, res){
        let {work, position, feedback, income, id} = req.body
        Person.update({working_place: work, occupied_position: position, 
            accounting_feedback: feedback, income_per_month: income},
            {where: {borrowerId: id} })
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
        let {id, guarantorWork, guarantorPosition, guarantorIncome} = req.body

        let person = await Person.findOne({where: {borrowerId: id}})

        let guarantor = await Guarantor.create({
            working_place: guarantorWork, occupied_position: guarantorPosition, income_per_month: guarantorIncome,
            personalityPassportNumber: 0})
        M2M_person_guarantor.create({amount_of_inv_credits: 0, personId: person.id, 
            guarantorId: guarantor.id})
    }
}

module.exports = new PersonController()
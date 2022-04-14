const Router = require('express')
const router = new Router()
const personController = require('../../controllers/borrowers/personController')
const typeRouter = require('../typeRouter')

router.use('/types', typeRouter)
router.get('/mail', personController.getMail)
router.get('/mail/:messageid', personController.getMessage)

router
    .route('/info/pledge')
    .get(personController.getPledge)
    .post(personController.setPledge)

router
    .route('/info/guarantor')
    .get(personController.getGuarantor)
    .post(personController.setGuarantor)

router
    .route('/info/income')
    .get(personController.getIncome)
    .post(personController.setIncome)

module.exports = router
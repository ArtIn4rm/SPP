const Router = require('express')
const router = new Router()
const companyController = require('../../controllers/borrowers/companyController')
const typeRouter = require('../typeRouter')

router.use('/types', typeRouter)
router.get('/mail', companyController.getMail)
router.get('/mail/:messageid', companyController.getMessage)

router
    .route('/info/sendBCR')
    .post(companyController.sendBCR)

router
    .route('/info/financies')
    .get(companyController.getFinancies)
    .post(companyController.setFinancies)

router
    .route('/info/taxes')
    .get(companyController.getTaxes)
    .post(companyController.setTaxes)

router
    .route('/info/pledge')
    .get(companyController.getPledge)
    .post(companyController.setPledge)

module.exports = router
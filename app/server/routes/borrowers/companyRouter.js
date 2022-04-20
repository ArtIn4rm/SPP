const Router = require('express')
const router = new Router()
const companyController = require('../../controllers/borrowers/companyController')
const typeRouter = require('../typeRouter')
const checkRoleMd = require('../../middleware/checkRoleMd')

router.use('/types', checkRoleMd(['Company']), typeRouter)
router.get('/mail', checkRoleMd(['Company']), companyController.getMail)
router.get('/mail/:messageid', checkRoleMd(['Company']), companyController.getMessage)

router
    .route('/info/sendBCR')
    .post(checkRoleMd(['Company']), companyController.sendBCR)

router
    .route('/info/financies')
    .get(checkRoleMd(['Company']), companyController.getFinancies)
    .post(checkRoleMd(['Company']), companyController.setFinancies)

router
    .route('/info/taxes')
    .get(checkRoleMd(['Company']), companyController.getTaxes)
    .post(checkRoleMd(['Company']), companyController.setTaxes)

router
    .route('/info/pledge')
    .get(checkRoleMd(['Company']), companyController.getPledge)
    .post(checkRoleMd(['Company']), companyController.setPledge)

module.exports = router
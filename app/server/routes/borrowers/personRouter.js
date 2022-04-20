const Router = require('express')
const router = new Router()
const personController = require('../../controllers/borrowers/personController')
const typeRouter = require('../typeRouter')
const checkRoleMd = require('../../middleware/checkRoleMd')

router.use('/types', checkRoleMd(['Person']), typeRouter)
router.get('/mail', checkRoleMd(['Person']), personController.getMail)
router.get('/mail/:messageid', checkRoleMd(['Person']), personController.getMessage)

router
    .route('/info/pledge')
    .get(checkRoleMd(['Person']), personController.getPledge)
    .post(checkRoleMd(['Person']), personController.setPledge)

router
    .route('/info/guarantor')
    .get(checkRoleMd(['Person']), personController.getGuarantor)
    .post(checkRoleMd(['Person']), personController.setGuarantor)

router
    .route('/info/income')
    .get(checkRoleMd(['Person']), personController.getIncome)
    .post(checkRoleMd(['Person']), personController.setIncome)

module.exports = router
const Router = require('express')
const router = new Router()
const consultantController = require('../../controllers/employee/consultantController')
const checkRoleMd = require('../../middleware/checkRoleMd')

router.post('/mail/:borrowerid', checkRoleMd(['Consultant']), consultantController.sendMessage)

router.get('/vipreq/next', checkRoleMd(['Consultant']), consultantController.vipreqNext)
router.get('/vipreq/prev', checkRoleMd(['Consultant']), consultantController.vipreqPrev)
router.get('/vipreq/:id', checkRoleMd(['Consultant']), consultantController.vipreqById)
router.get('/vipreq/:id/check', checkRoleMd(['Consultant']), consultantController.vipreqCheck)
router.post('/vipreq/:id/answer', checkRoleMd(['Consultant']), consultantController.vipreqAnswer)

router.get('/comreq/next', checkRoleMd(['Consultant']), consultantController.comreqNext)
router.get('/comreq/prev', checkRoleMd(['Consultant']), consultantController.comreqPrev)
router.get('/comreq/:id', checkRoleMd(['Consultant']), consultantController.comreqById)
router.get('/comreq/:id/check', checkRoleMd(['Consultant']), consultantController.comreqCheck)
router.post('/comreq/:id/answer', checkRoleMd(['Consultant']), consultantController.comreqAnswer)

router.get('/creq/next', checkRoleMd(['Consultant']), consultantController.comreqNext)
router.get('/creq/prev', checkRoleMd(['Consultant']), consultantController.comreqPrev)
router.get('/creq/:id', checkRoleMd(['Consultant']), consultantController.comreqById)
router.post('/creq/:id/answer', checkRoleMd(['Consultant']), consultantController.comreqAnswer)

module.exports = router
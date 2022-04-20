const Router = require('express')
const router = new Router()
const consultantController = require('../../controllers/employee/consultantController')

router.post('/mail/:borrowerid', consultantController.sendMessage)

router.get('/vipreq/next', consultantController.vipreqNext)
router.get('/vipreq/prev', consultantController.vipreqPrev)
router.get('/vipreq/:id', consultantController.vipreqById)
router.get('/vipreq/:id/check', consultantController.vipreqCheck)
router.post('/vipreq/:id/answer', consultantController.vipreqAnswer)

router.get('/comreq/next', consultantController.comreqNext)
router.get('/comreq/prev', consultantController.comreqPrev)
router.get('/comreq/:id', consultantController.comreqById)
router.get('/comreq/:id/check', consultantController.comreqCheck)
router.post('/comreq/:id/answer', consultantController.comreqAnswer)

router.get('/creq/next', consultantController.comreqNext)
router.get('/creq/prev', consultantController.comreqPrev)
router.get('/creq/:id', consultantController.comreqById)
router.post('/creq/:id/answer', consultantController.comreqAnswer)

module.exports = router
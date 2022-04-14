const Router = require('express')
const router = new Router()
const accountantController = require('../../controllers/employee/accountantController')

router.get('/report', accountantController.getReport)

router.get('/areq/next', accountantController.areqNext)
router.get('/areq/prev', accountantController.areqPrev)
router.get('/areq/:id', accountantController.areqById)
router.put('/areq/:id/activate', accountantController.areqActivate)

router.get('/overdue/next', accountantController.overdueNext)
router.get('/overdue/prev', accountantController.overduePrev)
router.get('/overdue/:id', accountantController.overdueById)
router.post('/overdue/:id/:borrowerid', accountantController.sendMessage)

module.exports = router
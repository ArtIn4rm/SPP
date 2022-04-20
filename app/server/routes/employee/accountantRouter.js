const Router = require('express')
const router = new Router()
const accountantController = require('../../controllers/employee/accountantController')
const checkRoleMd = require('../../middleware/checkRoleMd')

router.get('/report', checkRoleMd(['Accountant']), accountantController.getReport)

router.get('/areq/next', checkRoleMd(['Accountant']), accountantController.areqNext)
router.get('/areq/prev', checkRoleMd(['Accountant']), accountantController.areqPrev)
router.get('/areq/:id', checkRoleMd(['Accountant']), accountantController.areqById)
router.put('/areq/:id/activate', checkRoleMd(['Accountant']), accountantController.areqActivate)

router.get('/overdue/next', checkRoleMd(['Accountant']), accountantController.overdueNext)
router.get('/overdue/prev', checkRoleMd(['Accountant']), accountantController.overduePrev)
router.get('/overdue/:id', checkRoleMd(['Accountant']), accountantController.overdueById)
router.post('/overdue/:id/:borrowerid', checkRoleMd(['Accountant']), accountantController.sendMessage)

module.exports = router
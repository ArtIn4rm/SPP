const Router = require('express')
const router = new Router()
const inspectorController = require('../../controllers/employee/inspectorController')
const checkRoleMd = require('../../middleware/checkRoleMd')

router.get('/preq/next', checkRoleMd(['Inspector']), inspectorController.preqNext)
router.get('/preq/prev', checkRoleMd(['Inspector']), inspectorController.preqPrev)
router.get('/preq/:id', checkRoleMd(['Inspector']), inspectorController.preqById)
router.get('/preq/:id/history', checkRoleMd(['Inspector']), inspectorController.preqHistory)
router.get('/preq/:id/income', checkRoleMd(['Inspector']), inspectorController.preqIncome)
router.get('/preq/:id/income/check', checkRoleMd(['Inspector']), inspectorController.preqIncomeCheck)
router.delete('/preq/:id/answer', checkRoleMd(['Inspector']), inspectorController.preqAnswer)

module.exports = router
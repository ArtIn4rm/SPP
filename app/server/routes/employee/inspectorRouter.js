const Router = require('express')
const router = new Router()
const inspectorController = require('../../controllers/employee/inspectorController')

router.get('/preq/next', inspectorController.preqNext)
router.get('/preq/prev', inspectorController.preqPrev)
router.get('/preq/:id', inspectorController.preqById)
router.get('/preq/:id/history', inspectorController.preqHistory)
router.get('/preq/:id/income', inspectorController.preqIncome)
router.get('/preq/:id/income/check', inspectorController.preqIncomeCheck)
router.delete('/preq/:id/answer', inspectorController.preqAnswer)

module.exports = router
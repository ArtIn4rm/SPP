const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRoleMd = require('../middleware/checkRoleMd')

router.get('/:id', typeController.getById)

router.get('/', typeController.getAll)

router.post('/send', typeController.addCredit)

module.exports = router
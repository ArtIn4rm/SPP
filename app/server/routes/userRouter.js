const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const personRouter = require('./borrowers/personRouter')
const companyRouter = require('./borrowers/companyRouter')
const consultantRouter = require('./employee/consultantRouter')
const inspectorRouter = require('./employee/inspectorRouter')
const accountantRouter = require('./employee/accountantRouter')

router.post('/registrate', userController.registrate)

router.post('/login', userController.login)

router.get('/auth', userController.auth)

router.use('/person', personRouter)

router.use('/company', companyRouter)

router.use('/consultant', consultantRouter)

router.use('/inspector', inspectorRouter)

router.use('/accountant', accountantRouter)

module.exports = router
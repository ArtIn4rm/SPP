require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const model = require('./models/model')
const cors = require('cors')
const routes = require('./routes/router')
const errorHandler = require('./middleware/errorHandlingMd')

const PORT = process.env.PORT || 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', routes)

app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server run at port: ${PORT}`))
    }catch(e){
        console.log(e)
    }
}

 start()
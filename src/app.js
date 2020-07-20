const express = require('express')
const morgan = require('morgan')

const config = require('./config/setup')

const app = express()

app.use(morgan('dev'))

app.listen(config.PORT || 7500, () => {
  console.log(`Server is now running at port ${config.PORT}. Have a nice day!`)
})

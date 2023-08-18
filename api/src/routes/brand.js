const { Router } = require('express');
const {brandsHandler} = require('../handlers/brandsHandler')
const brandRouter = Router()

brandRouter.use("/", brandsHandler)

module.exports = {brandRouter}
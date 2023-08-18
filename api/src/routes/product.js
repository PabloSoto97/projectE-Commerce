const { Router } = require('express');
const {productsHandler} = require('../handlers/productsHandler')
const {createHandler} = require('../handlers/createProductHandler')
const productRouter = Router()

productRouter.get("/", productsHandler)
productRouter.post('/', createHandler)

module.exports = {productRouter}
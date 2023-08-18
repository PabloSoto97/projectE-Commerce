const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {brandRouter} = require('./brand');
const { productRouter } = require('./product');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/brands', brandRouter)
router.use("/products", productRouter)
module.exports = router;

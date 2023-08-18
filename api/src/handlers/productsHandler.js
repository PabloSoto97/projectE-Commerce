const {getProduct} = require('../controllers/productsControllers')
const productsHandler = async(req, res)=>{
   try {
      const results = await getProduct()
      res.status(200).json(results)
   } catch (error) {
      res.status(400).json({error: error.message})
   }
   
}

module.exports = {productsHandler};
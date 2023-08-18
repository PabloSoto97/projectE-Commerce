const {createProduct} = require('../controllers/createProductController')
const createHandler = async(req, res)=>{
    const {name, img, brand} = req.body
   try {
      const newProduct = await createProduct(name, img, brand)
      res.status(200).json(newProduct)
   } catch (error) {
      res.status(400).json({error: error.message})
   }
   
}

module.exports = {createHandler};
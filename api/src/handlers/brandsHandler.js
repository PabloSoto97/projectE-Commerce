const {getBrands} = require('../controllers/brandsController')
const brandsHandler = async(req, res)=>{
   try {
      const results = await getBrands()
      res.status(200).json(results)
   } catch (error) {
      res.status(400).json({error: error.message})
   }
   
}

module.exports = {brandsHandler};
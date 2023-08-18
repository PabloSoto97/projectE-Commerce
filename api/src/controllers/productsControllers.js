const {Product, Brand} = require('../db')
const getProduct = async ()=>{
  const productDb = await Product.findAll({
    include : {
        model: Brand,
        attributes: ["name"],
        through: {
            attributes: [],
        }
    }
  })
  return productDb;
}

module.exports = {getProduct}
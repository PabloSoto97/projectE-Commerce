const {Product, Brand} = require('../db')

const createProduct = async (name, img, brand)=>{
  const newProduct = await Product.create({name, img})
  const brandDb = await Brand.findAll({
    where: {
        name: brand,
    }
  })
  newProduct.addBrand(brandDb)
  return newProduct;
}

module.exports = {createProduct}
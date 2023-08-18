const {Brand} = require('../db')
const brands = [
    'Dell',
    'HP',
    'Lenovo',
    'Asus',
    'Logitech',
    'Razer',
    'Predator',
    'Mintaka',
    'MSI',
    'Corsair',
    'HyperX',
    'Acer',
    'RedDragon',
    'Xiaomi'
  ]
  
const getBrands = async ()=>{
         brands.map(async(el)=>{
       return await Brand.findOrCreate({ 
        where: {
            name: el
        }
    })
    })
    const getDb = await Brand.findAll();
    return getDb
}

module.exports = {getBrands};
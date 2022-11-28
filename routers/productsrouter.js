const { getCategorizedProduct, getAllProduct } = require('../controllers/productsController')

const router = require('express').Router()

// get all product by category 
router.get('/categorizedproducts', getCategorizedProduct)

//get all product 
router.get('/categorizedproducts', getAllProduct)


module.exports = router;
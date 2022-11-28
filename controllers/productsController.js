const Products = require("../models/productsmodel")


module.exports = {

    // get all products by category 
    getCategorizedProduct(req, res) {
        const { type } = req.query;
        Products.find({ type: type })
            .then(categorizedPrduct => {
                if (categorizedPrduct) {
                    return res.status(200).json({
                        categorizedPrduct
                    })
                }
                if (!categorizedPrduct) {
                    return res.status(200).json({
                        message: 'No Such Category Found'
                    })
                }
            })
            .catch(err => {
                return res.status(500).json({
                    message: 'Server Error Occured'
                })
            })
    },


    // get all products
    getAllProduct(req, res) {
        Products.find({})
            .then(allproducts => {
                if (allproducts) {
                    return res.status(200).json({
                        allproducts
                    })
                }
                if (!allproducts) {
                    return res.status(200).json({
                        message: 'No Such Category Found'
                    })
                }
            })
            .catch(err => {
                return res.status(500).json({
                    message: 'Server Error Occured'
                })
            })
    }
}
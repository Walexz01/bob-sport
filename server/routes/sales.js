const express = require('express');
const router = express.Router();
const {allSales} = require('../data/order_products')


router.get('/',async(req,res)=>{
    const result = await allSales()
    res.send(result)
})






module.exports = router;
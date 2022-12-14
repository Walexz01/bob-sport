const express = require('express');
const router = express.Router();
const {makePayment,Payments} = require('../data/payment')

router.get('/',async (req,res)=>{
    const result =  await Payments()
    res.send(result)
})


router.post('/:orderid',async (req,res)=>{
    const order_id = req.params.orderid
    const {method_name,amount} =  req.body
    await makePayment(order_id,method_name,amount)
    res.send('payment was successful')
})









module.exports = router;
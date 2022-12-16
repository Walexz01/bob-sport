const express = require('express');
const bcrypt = require("bcrypt")
const router = express.Router();
const {getUser,newUser} = require('../data/user')
// this is registration endpoint

router.post('/register',async(req,res)=>{
    const {user_name,password} = req.body
    const [user] = await getUser(user_name)
    if(user) return res.send('User with the given name already exist');
 
    const hashed_pass = await bcrypt.hash(password,10)
    await newUser(user_name,hashed_pass) 
    res.send('user created successfully')
})


// this is the endpoint for logininng in

router.post('/',async (req, res) => {

    const {user_name,password} = req.body

    const [user] = await getUser(user_name)

    if(!user) return res.send({error:'incorrect username or password'})

    const hashed = user.password;

    const compare = await bcrypt.compare(password,hashed)
    
    if(!compare) return res.send({error:'incorrect username or password'})
    res.send('user logged in')
})


module.exports = router;
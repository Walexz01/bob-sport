const express = require('express');
const app = express();
const customer = require('../server/routes/customers')
const product = require('../server/routes/products')




const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors())



app.use('/api/customers', customer)
app.use('/api/products', product)






const port = process.env.PORT || 3000;
const server = app.listen(port,()=> console.log(`listening on port ${port}`));

module.exports = server;


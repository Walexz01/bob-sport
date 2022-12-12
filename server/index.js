const express = require('express');
const app = express();
const customer = require('../server/routes/customers')
const product = require('../server/routes/products')
const sales = require('../server/routes/sales')




const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors())



app.use('/api/customers', customer)
app.use('/api/products', product)
app.use('/api/sales', sales)






const port = process.env.PORT || 3000;
app.listen(port,()=> console.log(`listening on port ${port}`));




const express = require('express');
const app = express();
const customer = require('../server/routes/customers')




const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(cors())



app.use('/api/customers', customer)






const port = process.env.PORT || 3000;
<<<<<<< HEAD
const server = app.listen(port,()=> console.log(`listening on port ${port}`));

module.exports = server;
=======
app.listen(port,()=> console.log(`listening on port ${port}`));
>>>>>>> 7c0e5b2 (complete the api request for the api/customers route)


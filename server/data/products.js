const pool = require('../../server/Connection/connection')


//  get all products

//  This  query is used to get  all the list of products that is in our database 

async function getAllProducts() {
    const query =`SELECT * FROM products`
    const [result] = await pool.query(query)
    return(result)
    
}

// getAllProducts()


//get products using name

//  This is to get the details of the products using their name

async function getProductByName(name) {
    const query =`SELECT * FROM products WHERE name = ?`
    const [result] = await pool.query(query,[name])
    return result
}
// getProductByName('football')



//delete productt using their name
//  This query is used to delete product from the database

async function deleteProduct(name){
    const query =`DELETE FROM products WHERE name = ?`


    const [result] = await pool.query(query,[name])
}


// deleteProduct('shoes')


//  update products 
// this query is for updating  the products 

async  function updateProducts(description,quantity_in_stock,unit_price,product_name) {
    const query = `UPDATE  products 
                        SET description = ?,
                         quantity_in_stock = ?,
                        unit_price = ? 
                        WHERE name = ?`
    const result = pool.query(query,[description,quantity_in_stock,unit_price,product_name])
    
}

//  This query  is for creating new products

async function createproduct(name,quantity_in_stock,description,unit_price) {
    const query = `INSERT INTO products(name,quantity_in_stock,description,unit_price) VALUES(?,?,?,?)`
    let [result] = await pool.query(query,[name,quantity_in_stock,description,unit_price])    
    return(getProductByName(name))

}
// createproduct('shoes',122,'super cool',12.332)



module.exports.getAllProducts = getAllProducts;
module.exports.getProductByName = getProductByName; 
module.exports.deleteProduct = deleteProduct; 
module.exports.updateProducts = updateProducts; 
module.exports.createproduct = createproduct;







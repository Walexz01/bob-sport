const pool = require('../Connection/connection')

//  to  get the lists of all the products that has been ordered and display it in the sales page
async function allSales() {
    const query = `
                    SELECT 
                    op.order_id,
                    p.name,
                    op.quantity,
                    op.unit_price,
                    o.order_date
                FROM
                    order_products op
                        JOIN
                    products p ON product_id = p.id
                        JOIN
                    orders o ON op.order_id = o.id
                ORDER BY order_id DESC
    `
    const [result] = await pool.query(query)
    
     return result
}



module.exports.allSales = allSales
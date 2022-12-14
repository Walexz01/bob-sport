const pool = require('../Connection/connection')



async function makePayment(order_id,method_name,amount) {
    let [[method_id]] = await pool.query(`SELECT id FROM payment_methods WHERE name = ?`,[method_name])
    method_id = method_id.id
    const query= `INSERT INTO payments(order_id, method_id, amount) VALUES(?, ?, ?)`;
    const result = await pool.query(query,[order_id, method_id, amount])
    return(result)
    
}
// makePayment(81,'cash',224)


async function payments() {
    const query= `SELECT 
                        p.order_id,
                        c.customer_name,
                        pm.name AS payment_method,
                        p.amount AS paid,
                        s.name AS status_name
                    FROM
                        payments p
                            JOIN
                        orders o ON p.order_id = o.id
                            JOIN
                        customers c ON o.customer_id = c.id
                        JOIN payment_methods pm
                        ON p.method_id = pm.id
                        JOIN status s
                        ON o.status_id = s.id`;
    const [result] = await pool.query(query)
    return(result)
    
}

// payments()



module.exports.makePayment = makePayment
module.exports.Payments = payments 
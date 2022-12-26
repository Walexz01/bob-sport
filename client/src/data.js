import {AiOutlineHome} from 'react-icons/ai'
import {RxPerson} from 'react-icons/rx'
import {TbExchange} from 'react-icons/tb'
import {BsBag} from 'react-icons/bs'
import {BiDollarCircle} from 'react-icons/bi'
import {SlSocialDropbox} from 'react-icons/sl'



export const Links = [
    {
        name: "Home",
        path: '/',
        icon:<AiOutlineHome/>
    },
    {
        name: "Customers",
        path: '/customers',
        icon:<RxPerson/>
    },
    {
        name: "Orders",
        path: '/orders',
        icon:<TbExchange/>
    },
    {
        name: "Sales",
        path: '/sales',
        icon:<BsBag/>
    },
    {
        name: "Payments",
        path: '/payments',
        icon:<BiDollarCircle/>
    },
    {
        name: "Products",
        path: '/products',
        icon:<SlSocialDropbox/>
    }
]

export const TableData =[
    {
        "Order_id":1,
        "Customer_name":"walexz",
        "Total_amount" :175,
        "Status_name" :"pending"
    },
    {
        "Order_id":2,
        "Customer_name":"walex",
        "Total_amount" :173,
        "Status_name" :"completed"
    },
    {
        "Order_id":3,
        "Customer_name":"onenine",
        "Total_amount" :1735,
        "Status_name" :"pending"
    },
    {
        "Order_id":4,
        "Customer_name":"walexz",
        "Total_amount" :1735,
        "Status_name" :"pending"
    },{
        "Order_id":5,
        "Customer_name":"bola",
        "Total_amount" :17905,
        "Status_name" :"cancel"
    },
    {
        "Order_id":6,
        "Customer_name":"walexz",
        "Total_amount" :1735,
        "Status_name" :"pending"
    },{
        "Order_id":7,
        "Customer_name":"mosoba",
        "Total_amount" :1,
        "Status_name" :"completed"
    },
    {
        "Order_id":8,
        "Customer_name":"sina",
        "Total_amount" :1735,
        "Status_name" :"pending"
    },{
        "Order_id":9,
        "Customer_name":"nike",
        "Total_amount" :1735,
        "Status_name" :"pending"
    },
    {
        "Order_id":10,
        "Customer_name":"israel",
        "Total_amount" :15,
        "Status_name" :"completed"
    }
]
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
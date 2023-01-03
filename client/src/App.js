import './App.css';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Home from './Pages/Home/Home';
import Customers from './Pages/Customers/Customers';
import Orders from './Pages/Orders/Orders';
import Sales from './Pages/Sales/Sales';
import Payments from './Pages/Payments/Payments';
import Products from './Pages/Products/Products';
import NotFound from './Pages/NotFound/NotFound'
import Newcustomer from './components/Newcustomer';
import Allorders from './components/Allorders';
import Pendingorders from './components/Pendingorders';
import Completedorders from './components/Completedorders';
import Canceledorders from './components/Canceledorders';
import Orderslist from './components/Orderslist';
import Itemsordered from './components/Itemsordered';
import Createpay from './components/Createpay';
function App() {

  return (
    <BrowserRouter>
      <div className="App">        
        <div className='sidebar__container'>
          <Sidebar/>
        </div>
        <div className='main'>
          <Topbar/>
          <div className="page_container">
            <Routes>
              {/* pages routes */}
              <Route path='/' element={<Home/>}/>
              <Route path='customers' element={<Customers/>}/>
              <Route path='customers/create' element={<Newcustomer/>}/>

              <Route path='orders' element={<Orders/>}>
                <Route index element={<Allorders/>}/>
                <Route path='all-orders' element={<Allorders/>}/>
                <Route path='pending-orders' element={<Pendingorders/>} />
                <Route path='completed-order' element={<Completedorders/>} />
                <Route path='canceled-order' element={<Canceledorders/>} />
              </Route>
              <Route path='orders/list/:id/:name' element={<Orderslist/>}/>
              <Route path='orders/items/:id/:name/:date/:t_amount/:s_name/:u_name' element={<Itemsordered/>}/>
              <Route path='orders/payment/create/:id' element={<Createpay/>}/>


              <Route path='sales' element={<Sales/>}/>
              <Route path='payments' element={<Payments/>}/>
              <Route path='products' element={<Products/>}/>
              <Route path="*" element={<NotFound/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

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
function App() {

  return (
    <BrowserRouter>
      <div className="App">        
        <div className='sidebar__container'>
          <Sidebar/>
        </div>
        <div className='main'>
          <Topbar/>
          <div className="text">
            <Routes>
              {/* pages routes */}
              <Route path='/' element={<Home/>}/>
              <Route path='customers' element={<Customers/>}/>
              <Route path='orders' element={<Orders/>}/>
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

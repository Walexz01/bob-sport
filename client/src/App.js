import './App.css';
import { BrowserRouter } from "react-router-dom";
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        
        <div className='sidebar__container'>
          <Sidebar/>
        </div>

        <div className='main'>
          <Topbar/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

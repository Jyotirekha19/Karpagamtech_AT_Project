import logo from './logo.svg';
import './App.css';
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <div className="header">
        <div className="measure">
        <ul>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE7hz7G9v7a7kpiE4VaxedwFeb0fjCfJfCmw&s" alt="Logo" width="35" height="35" margine-right="50px" />
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/education">BookTicket</NavLink></li>
            <li><NavLink to="/offer">Offer</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </div>
    
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

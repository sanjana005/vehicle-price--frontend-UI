import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import UserNavbar from './Components/UserNavbar';
import UserHome from './Components/UserHome';
import Advertisements from './Components/Advertisements';
import About from './Components/About';
import Contact from './Components/Contact';
import AdminNavbar from './Components/AdminNavbar';
import ManageVehicles from './Components/ManageVehicles';
import Prediction from './Components/Prediction';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/UserNavbar' element={<UserNavbar />} />
          <Route path='/UserHome' element={<UserHome/>} />
          <Route path='/Advertisements' element={<Advertisements/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/AdminNavbar' element={<AdminNavbar/>} />
          <Route path='/ManageVehicles' element={<ManageVehicles/>} />
          <Route path='/Prediction' element={<Prediction/>} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

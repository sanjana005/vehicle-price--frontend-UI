import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import UserNavbar from './Components/UserNavbar';
import UserHome from './Components/UserHome';
import Advertisements from './Components/Advertisements';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/UserNavbar' element={<UserNavbar />} />
          <Route path='/UserHome' element={<UserHome/>} />
          <Route path='/Advertisements' element={<Advertisements/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Contact' element={<Contact/>} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

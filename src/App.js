import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';
import UserNavbar from './Components/UserNavbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/' element={<UserNavbar />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

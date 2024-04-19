import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Registration from './Components/Registration';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Registration />} />
        </Routes>
      </Router>      
    </div>
  );
}

export default App;

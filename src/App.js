import './App.css';
import Create from './components/Create'
import Register from './components/Register'
import View from './components/View'
import Login from './components/Login'
import Update from './components/Update'
import ViewEmployee from './components/ViewEmployee';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="main">
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/add" element={<Create/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/viewEmployee" element={<ViewEmployee/>}/>
      </Routes>
    </Router>
    </div>
  </div>
   
  );
}

export default App;
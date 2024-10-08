import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import About from './components/About';
import Services from './components/Services';
import Contacts from './components/Contacts';
import Form from './pages/Form'


function App() {
  return (
    <div>
      <div>
        <Router>
          <GlobalStyles/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='/Services' element={<Services/>} />
            <Route path='/Contacts' element={<Contacts/>} />
            <Route path='/Form' element={<Form/>} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;

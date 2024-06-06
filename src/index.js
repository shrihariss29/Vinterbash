import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Navb from './Components/Navbar';
import Home from './Components/Home';
import Events from './Components/Events';
import Leaderboard from './Components/Leaderboard';
import Sponsors from './Components/Sponsors'; 
import Contact from './Components/Contacts';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navb />} >
        <Route index element={<Home />} />
        <Route path="Events" element={<Events />} />
        <Route path="Leaderboard" element={<Leaderboard />} />
        <Route path='Sponsors' element={<Sponsors/>}/>
        <Route path='Contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

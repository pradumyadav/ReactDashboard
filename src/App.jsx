import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Overview from './Components/Overview';
import PeopleDirectory from './Components/PeopleDirectory';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen ">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-5">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/people" element={<PeopleDirectory />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
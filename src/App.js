import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import { useState, useEffect } from 'react';

function App() {
  const [selectedTools, setSelectedTools] = useState([]);
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    fetch('/menuConfig.json')
      .then(response => response.json())
      .then(data => setMenuData(data.menuItems));
  }, []);

  return (
    <Router>
      <div className="app">
        {/* <Sidebar onMenuSelect={setSelectedTools} /> */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home tools={selectedTools} menuData={menuData} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 
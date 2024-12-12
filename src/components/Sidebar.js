import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ onMenuSelect }) => {
  const [menuData, setMenuData] = useState([]);
  const [activeMenu, setActiveMenu] = useState(null);

  useEffect(() => {
    fetch('/menuConfig.json')
      .then(response => response.json())
      .then(data => setMenuData(data.menuItems));
  }, []);

  const handleMenuClick = (menuItem, index) => {
    setActiveMenu(menuItem.id);
    onMenuSelect(menuItem.children || []);
    
    const mainContent = document.querySelector('.main-content');
    const element = document.getElementById(menuItem.id);
    
    if (element && mainContent) {
      // 获取主内容区域的总高度
      const contentHeight = mainContent.scrollHeight;
      
      // 根据菜单索引设置不同的滚动比例
      const scrollPercentages = {
        0: 0.2,  // 第一个菜单滚动20%
        1: 0.4,  // 第二个菜单滚动40%
        2: 0.6   // 第三个菜单滚动60%
      };
      
      const scrollPercentage = scrollPercentages[index] || 0.2;
      const scrollAmount = contentHeight * scrollPercentage;
      
      mainContent.scrollTo({
        top: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    const mainContent = document.querySelector('.main-content');
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="sidebar">
      <div className="logo">
        <h1 onClick={scrollToTop} style={{ cursor: 'pointer' }}>AI-Test</h1>
      </div>
      <nav>
        {menuData.map((item, index) => (
          <div key={item.id} className="menu-group">
            <Link 
              to="/" 
              className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
              onClick={() => handleMenuClick(item, index)}
            >
              <span className="icon">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
import React, { useRef } from 'react';
import '../styles/Home.css';

const Home = ({ tools, menuData }) => {
  const topRef = useRef(null);

  return (
    <div className="ai-tools" ref={topRef}>
      <div className="search-wrapper">
        <div className="search-container">
          <input 
            type="text" 
            placeholder="发送消息..." 
            className="search-input"
          />
          <div className="search-buttons">
            <button className="icon-button">
              <span></span>
            </button>
            <button className="send-button">
              <span></span>
            </button>
          </div>
        </div>
      </div>

      <div className="tools-content">
        {menuData.map((menu) => (
          <div key={menu.id} id={menu.id} className="tool-section">
            <h2 className="section-title">{menu.label}</h2>
            <div className="tools-grid">
              {menu.children.map((tool) => (
                <div 
                  key={tool.id} 
                  className="tool-card"
                  onClick={() => window.open(tool.url, '_blank')}
                >
                  <div className="tool-info">
                    <h3>{tool.title}</h3>
                    <p>{tool.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 
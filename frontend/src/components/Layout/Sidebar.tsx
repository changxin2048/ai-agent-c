import React, { useState } from 'react';
import { 
  ReloadOutlined,
  FolderOutlined,
  AppstoreOutlined,
  UserOutlined,
  MobileOutlined,
  DesktopOutlined
} from '@ant-design/icons';
import './Sidebar.css';

const Sidebar = () => {
  const [showQRCode, setShowQRCode] = useState(false);

  return (
    <div className="sidebar">
      <div className="logo">
        <img src="https://img.mp.sohu.com/upload/20170801/7491032cc2bb4d4897f4f58c4119847d_th.png" alt="Logo" />
      </div>
      
      <nav className="nav-items">
        <button className="nav-item" onClick={() => window.location.reload()}>
          <ReloadOutlined />
        </button>
        <button className="nav-item">
          <FolderOutlined />
        </button>
        <button className="nav-item">
          <AppstoreOutlined />
        </button>
        <button className="nav-item">
          <UserOutlined />
        </button>
        <button 
          className="nav-item"
          onMouseEnter={() => setShowQRCode(true)}
          onMouseLeave={() => setShowQRCode(false)}
        >
          <MobileOutlined />
          {showQRCode && (
            <div className="qrcode-popup">
              <img src='/image/qrcode.png' alt="QR Code" />
            </div>
          )}
        </button>
        <button className="nav-item">
          <DesktopOutlined />
        </button>
      </nav>
    </div>
  );
};

export default Sidebar; 
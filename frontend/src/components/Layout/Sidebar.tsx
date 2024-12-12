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
        <img src="https://img.zcool.cn/community/01s7laxpm7c3m4a4ppinxr3231.jpg?imageMogr2/auto-orient/thumbnail/1280x%3e/sharpen/0.5/quality/100" alt="Logo" />
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
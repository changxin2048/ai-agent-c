import * as React from 'react';
import './Bookmark.css';
import { SendOutlined } from '@ant-design/icons';

interface BookmarkCardProps {
  onTextClick?: (text: string) => void;
}

const BookmarkCard: React.FC<BookmarkCardProps> = ({ onTextClick }) => {
  const handleClick = (text: string) => {
    if (onTextClick) {
      onTextClick(text);
    }
  };

  const bookmarkItems = [
    '你是谁？',
    '查询北京未来3天天气',
    '帮我打开视联平台',
    '打开铁塔换电平台',
    '帮我打开百度官网',
    '打开中国铁塔官网',
    '执行接口巡检任务',
    '执行视联ui测试任务',
    '打开换电APP下载页',
  ];

  return (
    <div className="bookmark">
      <div className="title">
        <span>常用问题和指令</span>
      </div>
      
      <div className="txt-items" >
        {bookmarkItems.map((text, index) => (
          <div 
            key={index}
            className="txt-item" 
            onClick={() => handleClick(text)}
          >
            <span>{text}</span>
            <SendOutlined className="arrow-icon" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookmarkCard; 
import React, { useState } from 'react';

function AIChat() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: 'Xin chào! 👋',
      time: '14:33',
    },
    {
      id: 2,
      type: 'bot',
      content: 'Tôi là AI Assistant của Smart Food.',
      time: '14:33',
    },
    {
      id: 3,
      type: 'bot',
      content: 'Bạn cần hỗ trợ gì?',
      time: '14:33',
    },
    {
      id: 4,
      type: 'user',
      content: 'Cho mình gợi ý món ăn healthy nhé?',
      time: '16:17',
    },
    {
      id: 5,
      type: 'bot',
      content: 'Dưới đây là một số gợi ý món ăn healthy cho bạn:',
      list: [
        'Salad ức gà rau củ',
        'Cá hồi nướng sốt chanh',
        'Súp bí đỏ giảm cân',
        'Yến mạch trái cây',
      ],
      time: '16:33',
    },
    {
      id: 6,
      type: 'user',
      content: 'Cá hồi phi lê luộn dùng có giá bao nhiêu?',
      time: '16:37',
    },
    {
      id: 7,
      type: 'bot',
      content: 'Cá hồi phi lê luộn dùng có giá 250.000đ (giảm 10%) a.',
      time: '16:38',
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        content: inputMessage,
        time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          type: 'bot',
          content: 'Cảm ơn bạn đã liên hệ! Tôi sẽ hỗ trợ bạn ngay.',
          time: new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <aside className={`ai-chat ${isMinimized ? 'minimized' : ''}`}>
      <div className="chat-header">
        <div className="chat-header-left">
          <div
            className="chat-avatar"
            style={{
              padding: 0,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/avatarbotchat.png"
              alt="Bot"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '50%',
              }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<i class="fas fa-robot"></i>';
              }}
            />
          </div>
          <span>AI Assistant</span>
        </div>
        <div className="chat-header-right">
          <button className="chat-minimize" onClick={() => setIsMinimized(!isMinimized)}>
            <i className="fas fa-minus"></i>
          </button>
          <button className="chat-close" onClick={() => alert('Chat closed')}>
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>

      {!isMinimized && (
        <>
          <div className="chat-body">
            {messages.map((message) => (
              <div key={message.id} className={`chat-message ${message.type}`}>
                {message.type === 'bot' && (
                  <div
                    className="message-avatar"
                    style={{
                      padding: 0,
                      overflow: 'hidden',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'none',
                    }}
                  >
                    <img
                      src="/avatarbotchat.png"
                      alt="Bot"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%',
                      }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                )}
                <div className="message-content">
                  <p>{message.content}</p>
                  {message.list && (
                    <ul>
                      {message.list.map((item, index) => (
                        <li key={index}>
                          <i className="fas fa-check-circle soft-check"></i> {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  <span className="message-time">
                    {message.time}
                    {message.type === 'user' && <i className="fas fa-check-double"></i>}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="chat-footer">
            <input
              type="text"
              placeholder="Nhập tin nhắn..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button className="chat-send" onClick={handleSendMessage}>
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </>
      )}
    </aside>
  );
}

export default AIChat;

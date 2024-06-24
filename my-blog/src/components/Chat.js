import React, { useState, useEffect, useRef } from 'react';

const Chat = () => {
  const [userName, setUserName] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [socket, setSocket] = useState(null);
  const [isUserNameSet, setIsUserNameSet] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const storedMemberId = localStorage.getItem('memberId');
    console.log('Stored memberId:', storedMemberId);
    if (storedMemberId) {
      setUserName(storedMemberId);
      setIsUserNameSet(true);
    } else {
      setIsUserNameSet(false);
    }
  }, []);

  useEffect(() => {
    if (isUserNameSet) {
      const socketUrl = 'ws://192.168.0.32:80/chat';
      console.log('Attempting to connect to WebSocket:', socketUrl);
      const newSocket = new WebSocket(socketUrl);

      newSocket.onopen = () => {
        console.log('WebSocket connection opened');
        // 이전 메시지 요청
        newSocket.send(JSON.stringify({ type: 'load_messages' }));
      };

      newSocket.onmessage = (event) => {
        try {
          const newMessage = JSON.parse(event.data);
          if (newMessage.type === 'load_messages') {
            setMessages(newMessage.messages.map(message => ({
              ...message,
              timestamp: new Date(message.timestamp)
            })));
          } else {
            newMessage.timestamp = new Date();
            setMessages((prevMessages) => [...prevMessages, newMessage]);
          }
        } catch (error) {
          console.error('Error parsing incoming message:', error);
        }
      };

      newSocket.onclose = () => {
        console.log('WebSocket connection closed');
        setSocket(null);
      };

      newSocket.onerror = (error) => {
        console.error('WebSocket error', error);
      };

      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [isUserNameSet]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (userName.trim() !== '' && input.trim() !== '') {
      if (socket && socket.readyState === WebSocket.OPEN) {
        const message = { user: userName, message: input };
        socket.send(JSON.stringify(message));
        setInput('');
      } else {
        console.error('WebSocket is not open. Ready state:', socket ? socket.readyState : 'null');
      }
    } else {
      console.error('Please enter a valid memberId and message');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredMessages = messages.filter((message) =>
    message.user?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="chat-container">
      <div className="chat-room">
        <h1>채팅방</h1>
        <div className="messages-container">
          {filteredMessages.map((message, index) => (
            <div key={index} className="message">
              <span className="message-user">{message.user}</span>: {message.message}
              <span className="message-time"> ({new Date(message.timestamp).toLocaleString()})</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        {isUserNameSet ? (
          <>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="message-input"
            />
            <button onClick={sendMessage} className="send-button">
              전송
            </button>
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="검색어 입력"
              className="search-input"
            />
          </>
        ) : (
          <div className="not-logged-in-message">
            <p>로그인 후 채팅을 이용할 수 있습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;

import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Form, Button, Image, Card, Spinner } from 'react-bootstrap';
import SendIcon from '@mui/icons-material/Send';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import ImageIcon from '@mui/icons-material/Image';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserDetails } from '../../redux/reducer/registeruser/UserDetails';
import axios from 'axios';
import baseUrl from '../../constant/ConstantApi';

function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [file, setFile] = useState(null);

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);


  useEffect(() => {
    dispatch(fetchUserDetails());
    fetchMessages(); // Load messages on component mount
  }, [dispatch]);

  // Format the time to display with the message
  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
  };

  // Fetch all messages from the backend
  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem('authToken'); // Get the token from local storage
      const response = await axios.get(`${baseUrl}user/get_all_message`, {
        headers: { "authorization": `Bearer ${token}` },
      });

      // Format time in 24-hour format (HH:mm) for each message
      const formattedMessages = response.data.map((message) => {
        // Assuming message.time is a valid Date string or timestamp
        const time = new Date(message.time); // Convert to Date object
        const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format time as HH:mm

        return {
          ...message,
          time: formattedTime, // Update time field with formatted time
        };
      });

      setMessages(formattedMessages); // Update the state with formatted messages
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = {
        text: input,
        sender: user?.username, // Use the username
        time: formatTime(new Date()),
      };

      // Optimistically update the UI
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setTyping(false);

      try {
        const formData = new FormData();
        formData.append('text', input);
        formData.append('sender', user?.username);
        formData.append('time', new Date().toISOString());
        if (file) {
          formData.append('file', file);
        }

        const response = await axios.post(`${baseUrl}user/message`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        if (response.status === 201) {
          fetchMessages(); // Reload messages from the backend
        } else {
          console.error('Failed to send message:', response.data);
        }
      } catch (error) {
        console.error('Error sending message:', error.response ? error.response.data : error.message);
      }
    }
  };



  // Simulate bot response
  const handleReceiverMessage = () => {
    const botMessage = {
      text: 'This is a response from the bot.',
      sender: 'bot',
      time: formatTime(new Date()),
    };
    setMessages((prevMessages) => [...prevMessages, botMessage]);
    setTyping(false);
  };

  const handleUploadFile = (event) => {
    setFile(event.target.files[0]); // Handle file input
  };

  const handleUploadImage = () => {
    console.log('Upload Image Clicked');
  };

  const handleUpload = () => {
    console.log('Upload Clicked');
  };

  useEffect(() => {
    if (messages.length > 0 && messages[messages.length - 1].sender === 'user') {
      setTimeout(handleReceiverMessage, 2000); // Simulate bot response after 2 seconds
    }
  }, [messages]);

  return (
    <Container fluid className="mt-5">
      <Row>
        <Col lg={3}></Col>
        <Col lg={8}>

          <Row className="justify-content-center">
            <Col xs={12} md={8} lg={12}>
              {/* Header like WhatsApp */}
              <Card className="h-100 shadow">
                <Card.Body className="d-flex flex-column p-0">
                  {/* Header */}
                  <div className="d-flex align-items-center p-3 border-bottom bg-success text-white">
                    <h3>Chat Section</h3>
                  </div>

                  {/* Messages Section */}
                  <div className="flex-grow-1 overflow-auto p-3 bg-light">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`d-flex align-items-start mb-3 ${message.sender === user?.username ? 'flex-row-reverse' : ''}`}
                      >
                        <Image
                          src="https://via.placeholder.com/40"
                          roundedCircle
                          className={`me-2 ${message.sender === user?.username ? 'ms-2' : ''}`}
                        />
                        <div
                          className={`p-2 rounded ${message.sender === user?.username ? 'bg-info text-dark' : 'bg-white text-dark'}`}
                        >
                          <div className='d-flex justify-content-between'>
                            <div className="small text-muted text-end me-5">{message.sender}</div>
                            <div className="small text-muted text-end">{message.time}</div>
                          </div>
                          {message.text}
                        </div>
                      </div>
                    ))}

                    {/* Typing Indicator */}
                    {typing && (
                      <div className="d-flex align-items-center">
                        <Spinner animation="border" size="sm" className="me-2 text-success" />
                        <span className="text-success">Typing...</span>
                      </div>
                    )}
                  </div>

                  {/* Input Section */}
                  <div className="d-flex p-3 border-top bg-white align-items-center bg-info">
                    <Button
                      variant="light"
                      className="me-2 rounded-pill shadow-sm"
                      onClick={handleUploadFile}
                    >
                      <UploadFileIcon />
                    </Button>
                    <Button
                      variant="light"
                      className="me-2 rounded-pill shadow-sm"
                      onClick={handleUploadImage}
                    >
                      <ImageIcon />
                    </Button>
                    <Button
                      variant="light"
                      className="me-2 rounded-pill shadow-sm"
                      onClick={handleUpload}
                    >
                      <FileUploadIcon />
                    </Button>
                    <Form.Control
                      type="text"
                      value={input}
                      placeholder="Type a message..."
                      onChange={(e) => setInput(e.target.value)}
                      className="me-2 rounded-pill shadow-sm flex-grow-1"
                    />
                    <Button variant="success" onClick={handleSendMessage} className="rounded-pill shadow-sm">
                      <SendIcon />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

        </Col>
      </Row>
    </Container>
  );
}

export default ChatApp;

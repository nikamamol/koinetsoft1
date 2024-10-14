import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import Avatar from "../assets/man.webp";

const steps = [
    {
        id: '0',
        message: 'Hello! Welcome to our lead generation campaign management tool.',
        trigger: '1',
    },
    {
        id: '1',
        message: 'How can I assist you today? You can ask about campaign creation, billing, or support.',
        trigger: '2',
    },
    {
        id: '2',
        options: [
            { value: 'campaign', label: 'Tell me about Campaign Creation', trigger: 'campaign' },
            { value: 'billing', label: 'How does Billing work?', trigger: 'billing' },
            { value: 'support', label: 'I need Support', trigger: 'support' },
            { value: 'campaignStatus', label: 'What is the status of my campaigns?', trigger: 'campaignStatus' },
            { value: 'dataReporting', label: 'How can I access campaign reports?', trigger: 'dataReporting' },
            { value: 'exit', label: 'Exit', trigger: 'exit' },
        ],
    },
    {
        id: 'campaign',
        message: 'You can create campaigns with all necessary details and attach demo files for the RA team to review. Each campaign has a unique file structure for easy identification.',
        trigger: 'askNextQuestion',
    },
    {
        id: 'billing',
        message: 'The system generates invoices based on campaign performance, total leads, rejected leads, and price per lead. You can view, download, and manage invoices in this section.',
        trigger: 'askNextQuestion',
    },
    {
        id: 'support',
        message: 'Please describe the issue you are facing, and our support team will get back to you shortly.',
        trigger: 'askNextQuestion',
    },
    {
        id: 'campaignStatus',
        message: 'You can check the status of your campaigns in the dashboard under the "My Campaigns" section. Each campaign will have its status displayed, such as Active, Paused, or Completed.',
        trigger: 'askNextQuestion',
    },
    {
        id: 'dataReporting',
        message: 'To access campaign reports, navigate to the "Reports" section where you can generate reports based on your campaigns and download them in various formats.',
        trigger: 'askNextQuestion',
    },
    {
        id: 'askNextQuestion',
        message: 'Would you like to ask anything else?',
        trigger: 'nextQuestions',
    },
    {
        id: 'nextQuestions',
        options: [
            { value: 'campaign', label: 'Tell me about Campaign Creation', trigger: 'campaign' },
            { value: 'billing', label: 'How does Billing work?', trigger: 'billing' },
            { value: 'support', label: 'I need Support', trigger: 'support' },
            { value: 'campaignStatus', label: 'What is the status of my campaigns?', trigger: 'campaignStatus' },
            { value: 'dataReporting', label: 'How can I access campaign reports?', trigger: 'dataReporting' },
            { value: 'exit', label: 'Exit', trigger: 'exit' },
        ],
    },
    {
        id: 'exit',
        message: 'Thank you for using our chatbot! If you need further assistance, feel free to reach out.',
        end: true,
    },
];

// Creating our own theme
const theme = {
    background: '#D1E9F6',
    headerBgColor: '#EF5A6F',
    headerFontSize: '20px',
    botBubbleColor: '#00c298',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#72c437',
    userFontColor: 'white',
};

// Set some properties of the bot
const config = {
    botAvatar: Avatar,
    floating: true,
};

function Chatbot() {
    return (
        <div className="chatbot-wrapper">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Chatbot"
                    steps={steps}
                    {...config}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;

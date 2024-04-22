import React, { useState } from 'react';
import chImg from '../images/chat-bot.png'

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showChatbot, setShowChatbot] = useState(false);
  const [showExampleQuestions, setShowExampleQuestions] = useState(true);

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (inputText.trim() !== '') {
      setMessages([...messages, { text: inputText, sender: 'user' }]);
      // Handle chatbot responses
      const botResponse = generateBotResponse(inputText);
      setMessages([...messages, { text: botResponse, sender: 'bot' }]);
      setInputText('');
    }
  };

  const generateBotResponse = (input) => {
    const normalizedInput = input.toLowerCase().trim();
    if (normalizedInput.includes('hello') || normalizedInput.includes('hi')) {
      return 'Hi there! How can I assist you today?';
    } else if (normalizedInput.includes('study visa') || normalizedInput.includes('visa')) {
      return 'Sure, we can help you with information about study visas. Please let us know your specific queries.';
    } else if (normalizedInput.includes('application process') || normalizedInput.includes('documents')) {
      return 'To apply for a study visa, you typically need to provide documents such as your passport, proof of financial support, academic transcripts, and a letter of acceptance from a recognized institution. Would you like more details on this?';
    } else if (normalizedInput.includes('cost') || normalizedInput.includes('fees')) {
      return 'The cost of a study visa can vary depending on factors such as the country you\'re applying to, the duration of your study program, and any additional services you require. We can provide you with a personalized cost estimate if you provide us with more information.';
    } else {
      return "I'm sorry, I didn't understand that. Could you please rephrase?";
    }
  };

  const handleExampleQuestionClick = (question) => {
    setMessages([...messages, { text: question, sender: 'user' }]);
    const botResponse = generateBotResponse(question);
    setMessages([...messages, { text: botResponse, sender: 'bot' }]);
    setShowExampleQuestions(false);
  };

  const exampleQuestions = [
    'Hello',
    'Hi',
    'Can you help me with a study visa?',
    'What is the application process for a study visa?',
    'How much does a study visa cost?',
  ];

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
    setShowExampleQuestions(true);
  };

  return (
    <div>
      <button onClick={toggleChatbot} className="fixed animate-bounce bottom-8 right-8 z-50 bg-purple-200 text-white py-3 px-2 rounded-full shadow-lg flex items-center">
        <img src={chImg} alt="Chat Icon" className="w-14" />
      </button>
      {showChatbot && (
        <div className="fixed bottom-16 right-8 z-50">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden w-72 max-w-md">
            <div className="flex flex-col h-96">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-800">Chat with us</h2>
              </div>
              <div className="flex-1 overflow-y-auto px-4 py-2">
                {messages.map((message, index) => (
                  <div key={index} className={`text-sm py-1 ${message.sender === 'bot' ? 'text-left' : 'text-right'}`}>
                    <div className={`inline-block px-3 py-1 rounded-lg ${message.sender === 'bot' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
              {showExampleQuestions && (
                <div className="px-4 py-2 border-t border-gray-200">
                  <p className="text-sm font-medium text-gray-600">Example Questions:</p>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    {exampleQuestions.map((question, index) => (
                      <button key={index} onClick={() => handleExampleQuestionClick(question)} className="py-1 px-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">{question}</button>
                    ))}
                  </div>
                </div>
              )}
              <form onSubmit={handleMessageSubmit} className="flex justify-between items-center px-4 py-2 border-t border-gray-200">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full py-2 px-3 bg-gray-100 focus:outline-none focus:ring focus:border-blue-300 border-gray-300 rounded-lg"
                />
                <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Send</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;

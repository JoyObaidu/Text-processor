import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Buttons from "./components/Buttons";

function App() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [loading] = useState(false);

  const handleSend = async () => {
    if (!text.trim()) return;
    const newMessage = { text, language: "Detecting...", type: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setText("");
    detectLanguage(newMessage.text);
  };

  const detectLanguage = async (inputText) => {
    setTimeout(() => {
      const detectedLanguage = "English";
      const updatedMessage = { text: inputText, language: detectedLanguage, type: "bot", showSummarize: detectedLanguage === "English" && inputText.length > 150 };
      setMessages((prev) => prev.map((msg, index) => (index === prev.length - 1 ? updatedMessage : msg)));
    }, 1000);
  };

  const handleSummarize = () => {
    setMessages((prev) => [...prev, { text: "Summarized version of the text...", language: "English", type: "bot" }]);
  };

  const handleTranslate = () => {
    setMessages((prev) => [...prev, { text: `Translated text to ${selectedLanguage}`, language: selectedLanguage, type: "bot" }]);
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4 w-full max-w-md mx-auto">
      <div className="w-full p-4 h-72 overflow-y-auto">
        {messages.map((msg, index) => (
          <Output key={index} response={msg.text} language={msg.language} showSummarize={msg.showSummarize} onSummarize={handleSummarize} onTranslate={handleTranslate} selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
        ))}
      </div>
      <Input text={text} setText={setText} onSend={handleSend} />
      <div className="flex space-x-2">
        <Buttons onClick={handleTranslate} loading={loading} label="Translate" />
        <Buttons onClick={handleSummarize} loading={loading} label="Summarize" />
      </div>
    </div>
  );
}

export default App;

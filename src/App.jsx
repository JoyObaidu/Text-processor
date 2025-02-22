import { useState } from "react";
import Input from "./components/Input";
import Output from "./components/Output";
import Buttons from "./components/Buttons";

function App() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleProcess = async (mode) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { text, type: "user" }]); // Show user input immediately
    setText(""); // Clear input field
    setLoading(true);
    
    try {
      const apiKey = "AIzaSyBLsBaD1vG01c2Ygd3MBXUHv4aGv-PTDwc";
      const apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyBLsBaD1vG01c2Ygd3MBXUHv4aGv-PTDwc" + apiKey;
      
      const bodyContent =
        mode === "summarize"
          ? { contents: [{ parts: [{ text: "Summarize this: " + text }] }] }
          : { contents: [{ parts: [{ text: "Translate this: " + text }] }] };

      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyContent),
      });
      
      const data = await res.json();
      const aiResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from AI.";
      setMessages((prev) => [...prev, { text: aiResponse, type: "ai" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { text: "Oops! Something went wrong. Please try again.", type: "error" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-4">
      <h1 className="text-black font-extrabold">AI TEXT <span className="text-purple-800">PROCESSOR</span></h1>
      <div className="w-full max-w-md p-4"> 
        <h2 className="text-xl font-bold text-center">AI Chat Translator & Summarizer</h2>
        <p className="text-sm text-gray-600 text-center">Enter your text below and choose an action.</p>
        <div className="space-y-4 mt-4">
          <Input text={text} setText={setText} />
          <div className="space-y-2">
            {messages.map((msg, index) => (
              <Output key={index} response={msg.text} type={msg.type} />
            ))}
          </div>
          <div className="flex space-x-2">
            <Buttons onClick={() => handleProcess("translate")} loading={loading} label="Translate" text={text} />
            <Buttons onClick={() => handleProcess("summarize")} loading={loading} label="Summarize" text={text} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react';

const Output = ({ response, language, showSummarize, onSummarize, onTranslate, selectedLanguage, setSelectedLanguage }) => {
  return (
    response && (
      <div className="mt-2 p-3 bg-gray-100 rounded border border-gray-300">
        <strong>Response:</strong>
        <p>{response}</p>
        <p className="text-sm text-black">Detected Language: {language}</p>
        {showSummarize && <button className="mt-2 p-2 bg-green-500 text-white rounded" onClick={onSummarize}>Summarize</button>}
        <div className="mt-2 flex items-center space-x-2">
          <select className="p-2 bg-white border rounded" value={selectedLanguage} onChange={(e) => setSelectedLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="pt">Portuguese</option>
            <option value="es">Spanish</option>
            <option value="ru">Russian</option>
            <option value="tr">Turkish</option>
            <option value="fr">French</option>
          </select>
          <button className="p-2 bg-purple-500 text-white rounded" onClick={onTranslate}>Translate</button>
        </div>
      </div>
    )
  );
};

export default Output;

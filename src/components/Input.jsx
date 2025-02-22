import React from 'react';

const Input = ({ text, setText, onSend }) => {
  return (
    <div className="flex w-full">
      <input
        type="text"
        placeholder="Enter a text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full px-3 py-2 border border-purple-500 rounded-lg bg-white"
        onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), onSend())}
      />
      <button className="ml-2 p-2 bg-purple-700 font-bold text-white rounded" onClick={onSend}>Send</button>
    </div>
  );
};

export default Input;

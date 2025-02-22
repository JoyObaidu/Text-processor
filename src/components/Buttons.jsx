import React from 'react';

const Buttons = ({ onClick, loading, label, setResponse }) => {
    const handleClick = () => {
        setResponse(""); // clear previous text
        onClick();
      };
  return (
    <button
      onClick={onClick}
      disabled={loading}
      className="px-4 py-2 bg-purple-700 text-white font-bold rounded-lg hover:bg-white hover:text-purple-800 disabled:opacity-50"
    >
      {loading ? "Processing..." : label}
    </button>
  );
};

export default Buttons;

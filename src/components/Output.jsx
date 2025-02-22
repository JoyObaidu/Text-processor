/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const Output = ({ response, language, showSummarize, onSummarize }) => {
  return (
    response && (
      <div className="fllex mt-2 py-2 w-3/5 bg-purple-700 text-white rounded-md">
        <p className='flex-1 p-2'>{response}</p>
        <p className="text-sm float-right">{language}</p>
        {showSummarize && <button className="mt-2 p-2 text-white rounded" onClick={onSummarize}>Summarize</button>}
       
      </div>
    )
  );
};

export default Output;

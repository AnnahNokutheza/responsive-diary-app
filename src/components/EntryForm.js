import React, { useState } from 'react';


const EntryForm = ({ onAddEntry }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim() !== '') {
      onAddEntry(content);
      setContent('');
    }
  };

  return (
    <div className="entry-form">
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your diary entry..."
        />
        <button type="submit">Add Entry</button>
      </form>
    </div>
  );
};

export default EntryForm;

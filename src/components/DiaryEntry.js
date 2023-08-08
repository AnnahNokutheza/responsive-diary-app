import React from 'react';


const DiaryEntry = ({ date, content }) => {
  return (
    <div className="diary-entry">
      <div className="entry-date">{date}</div>
      <div className="entry-content">{content}</div>
    </div>
  );
};

export default DiaryEntry;

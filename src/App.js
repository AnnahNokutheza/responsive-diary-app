import React, { useState } from 'react';
import styled from 'styled-components';
import './styles/main.css';
import Header from './components/Header';
import DiaryList from './components/DiaryList';
import EntryForm from './components/EntryForm';

// Import your cover image here
import coverImage from './images/to/cover-image.jpg';

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  max-height: 300px; /* Adjust the height as needed */
  object-fit: cover; /* Maintain aspect ratio and cover the container */
  margin-bottom: 1rem; /* Add some spacing between the cover image and other content */
`;

const App = () => {
  const [entries, setEntries] = useState([]);

  const handleAddEntry = (content) => {
    const newEntry = {
      date: new Date().toLocaleDateString(),
      content: content,
    };

    setEntries([newEntry, ...entries]);
  };

  return (
    <Container>
      <Header />
      <CoverImage src={coverImage} alt="Diary Cover" />

      <EntryForm onAddEntry={handleAddEntry} />
      <DiaryList entries={entries} />
    </Container>
  );
};

export default App;

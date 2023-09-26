import React, { useState } from 'react';
import styled from 'styled-components';
import '../styles/main.css';
import Header from '../components/Header';
import DiaryList from '../components/DiaryList';
import EntryForm from '../components/EntryForm';

const Container = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
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
      {/* Cover image removed */}
      <EntryForm onAddEntry={handleAddEntry} />
      <DiaryList entries={entries} />
    </Container>
  );
};

export default App;

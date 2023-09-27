import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import backgroundImage from '../images/cover-image.jpg';

const LandingPageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: black;
`;

const StartWritingButton = styled.button`
  background-color: black;
  color: white;
  padding: 15px 30px;
  font-size: 24px;
  border: none;
  cursor: pointer;
  border-radius: 50%; /* Make the button round */
`;


const LandingPage = () => {
  const navigate = useNavigate();

  const handleStartWriting = () => {
    // Navigate to the home page ("/")
    navigate('/home');
  };

  return (
    <LandingPageContainer>
    <h1>Your Diary</h1>
      <p>Welcome to your personal diary. Start documenting your thoughts and experiences.</p>
      <StartWritingButton onClick={handleStartWriting}>Start Writing</StartWritingButton>
    </LandingPageContainer>
  );
};

export default LandingPage;

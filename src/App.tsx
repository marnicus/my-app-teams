import React from 'react';
import './App.scss';
import MyAppBar from './components/header/MyAppbar';
import Container from '@mui/material/Container';
import MainContent from './components/Main';

function App() {
  return (
    <div className="App">
      <MyAppBar />
      <Container>
        <MainContent />
      </Container>
    </div>
  );
}

export default App;

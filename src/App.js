import React from 'react';
import { Header } from './Components/Header';
import { LeftPanel } from './Components/LeftPanel';
import { MiddlePanel } from './Components/MiddlePanel';
import { RightPanel } from './Components/RightPanel';
import Input from './Components/Input';
import './Styles/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <LeftPanel />
      <Input />
      <RightPanel />
    </div>
  );
}

export default App;

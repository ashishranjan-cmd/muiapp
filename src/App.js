import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AddPhotoAlternateIcon />
        <ThreeDRotation />
        <Button variant='contained'>Click Here</Button>
      </header>
    </div>
  );
}

export default App;

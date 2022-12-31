import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import SaveIcon from '@mui/icons-material/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button 
            startIcon={ <SaveIcon /> }
            endIcon={ <AddPhotoAlternateIcon />}
            variant='contained'
            href='#'
            >
            Save
        </Button>

        <Button 
            startIcon={ <SaveIcon /> }
            endIcon={ <AddPhotoAlternateIcon />}
            variant='contained'
            href='#'
            >
            Save
        </Button>
      </header>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { AccessAlarm, SafetyCheckRounded, ThreeDRotation } from '@mui/icons-material';

import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import CheckBox from '@mui/material/Checkbox';
import { FormControlLabel } from '@mui/material';
import TextField from '@mui/material/TextField';

function MycheckBox(){
  // const checked = false;
  const [ checked , setChecked ] = React.useState(false);

  return(
    <FormControlLabel 
    control={
      <CheckBox
        icon={ <DeleteIcon /> }
        checkedIcon = { <SaveIcon /> }
        checked = {checked}
        onChange={(e) => setChecked(e.target.checked) }
        inputProps={{ 'arial-label' : 'controlled'}}
      />
  }
    label = "i am check"
    />
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextField
        color="error"
        />

        <MycheckBox />

      <ButtonGroup>
        <Button 
            startIcon={ <SaveIcon /> }
            // endIcon={ <AddPhotoAlternateIcon />}
            variant='outlined'
            color='success'
            href='#'
            onClick={() => alert("Item Saved")}
            >
            Save It 
        </Button>

        <Button 
            startIcon={ <DeleteIcon /> }
            //endIcon={ <AddPhotoAlternateIcon />}
            variant='outlined'
            color='error'
            href='#'
            onClick={() => alert("Item Deleted")}
            >
            Delete
        </Button>
      </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" /> 
      </header>
    </div>
  );
}

export default App;
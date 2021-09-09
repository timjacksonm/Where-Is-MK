import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import './index.css';

const Settings = () => {
  const [time, setTime] = useState('');
  const [characters, setCharacters] = useState('');
  const [error, setError] = useState(false);
  const [helperText, setHelperText] = useState(' ');

  const handleRadioChange = (e) => {
    if (e.target.name === 'time') {
      setTime(e.target.value);
    } else if (e.target.name === 'characters') {
      setCharacters(e.target.value);
    }
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (time && characters) {
      window.location.href = `${window.location.href}game/${time}/${characters}`;
    }
    setError(true);
    setHelperText('Please finish selecting your settings');
  };

  return (
    <div className="settings">
      <form onSubmit={handleSubmit}>
        <FormControl component="fieldset" error={error}>
          <FormLabel component="legend">Select your time limit:</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="time"
            onChange={handleRadioChange}
            row
          >
            <FormControlLabel value="5" control={<Radio />} label="5 Minutes" />
            <FormControlLabel
              value="10"
              control={<Radio />}
              label="10 Minutes"
            />
            <FormControlLabel
              value="none"
              control={<Radio />}
              label="Unlimited"
            />
          </RadioGroup>
          <FormLabel component="legend">Find how many characters:</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="characters"
            onChange={handleRadioChange}
            row
          >
            <FormControlLabel value="3" control={<Radio />} label="Find 3" />
            <FormControlLabel value="10" control={<Radio />} label="Find 10" />
            <FormControlLabel
              value="all"
              control={<Radio />}
              label="Find All"
            />
          </RadioGroup>
          <FormHelperText>{helperText}</FormHelperText>
          <button type="submit" className="button-7">
            Start
          </button>
        </FormControl>
      </form>
    </div>
  );
};

export default Settings;

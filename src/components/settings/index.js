import React, { useState } from 'react';
import {
  SettingsContainer,
  Title,
  RadioLabel,
  HiddenRadio,
  RadioGroup,
  Unchecked,
  Checked,
  Start,
  ChoicesContainer,
  Description,
  Alert,
} from './settings.styles';

const Settings = ({ handleSubmit, setTime, setCharacters, helperText }) => {
  const group1 = {
    1: false,
    2: false,
    3: false,
  };
  const group2 = {
    4: false,
    5: false,
    6: false,
  };

  const [checked, setChecked] = useState({ ...group1, ...group2 });

  const handleClick = (e) => {
    if (e.target.name === 'group1') {
      setChecked({ ...checked, ...group1, [e.target.id]: true });
      setTime(e.target.value);
    }
    if (e.target.name === 'group2') {
      setChecked({ ...checked, ...group2, [e.target.id]: true });
      setCharacters(e.target.value);
    }
  };
  return (
    <SettingsContainer onSubmit={handleSubmit}>
      <ChoicesContainer>
        <RadioGroup divider>
          <Title checked={checked}>Time limit:</Title>
          <RadioLabel>
            {checked[1] ? <Checked /> : <Unchecked />}
            <Description>5 Minutes</Description>
            <HiddenRadio
              id="1"
              type="radio"
              checked={checked[1]}
              onChange={handleClick}
              name="group1"
              value="5"
            />
          </RadioLabel>
          <RadioLabel>
            {checked[2] ? <Checked /> : <Unchecked />}
            <Description>10 Minutes</Description>
            <HiddenRadio
              id="2"
              type="radio"
              checked={checked[2]}
              onChange={handleClick}
              name="group1"
              value="10"
            />
          </RadioLabel>
          <RadioLabel>
            {checked[3] ? <Checked /> : <Unchecked />}
            <Description>Unlimited</Description>
            <HiddenRadio
              id="3"
              type="radio"
              checked={checked[3]}
              onChange={handleClick}
              name="group1"
              value="none"
            />
          </RadioLabel>
        </RadioGroup>
        <RadioGroup>
          <Title checked={checked}>Characters:</Title>
          <RadioLabel>
            {checked[4] ? <Checked /> : <Unchecked />}
            <Description>Find 3</Description>
            <HiddenRadio
              id="4"
              type="radio"
              checked={checked[4]}
              onChange={handleClick}
              name="group2"
              value="3"
            />
          </RadioLabel>
          <RadioLabel>
            {checked[5] ? <Checked /> : <Unchecked />}
            <Description>Find 10</Description>
            <HiddenRadio
              id="5"
              type="radio"
              checked={checked[5]}
              onChange={handleClick}
              name="group2"
              value="10"
            />
          </RadioLabel>
          <RadioLabel>
            {checked[6] ? <Checked /> : <Unchecked />}
            <Description>Find All</Description>
            <HiddenRadio
              id="6"
              type="radio"
              checked={checked[6]}
              onChange={handleClick}
              name="group2"
              value="all"
            />
          </RadioLabel>
        </RadioGroup>
      </ChoicesContainer>
      {helperText && <Alert>{helperText}</Alert>}
      <Start type="submit">Start</Start>
    </SettingsContainer>
  );
};

export default Settings;

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

const Settings = ({
  leaderboard,
  timeLimit,
  amountToFind,
  setFilterFind,
  setFilterTime,
}) => {
  const group1 = {
    5: false,
    10: false,
    none: false,
  };
  const group2 = {
    3: false,
    10: false,
    all: false,
  };

  const [checked, setChecked] = useState(() =>
    !leaderboard
      ? { group1: group1, group2: group2 }
      : {
          group1: { ...group1, ...{ [timeLimit]: true } },
          group2: { ...group2, ...{ [amountToFind]: true } },
        }
  );
  const [time, setTime] = useState('');
  const [characters, setCharacters] = useState('');
  const [helperText, setHelperText] = useState(' ');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (time && characters) {
      window.location.href = `${window.location.href}game/${time}/${characters}`;
    }
    setHelperText('Please finish selecting your settings');
  };

  const handleChange = (e) => {
    if (!leaderboard) {
      if (e.target.name === 'group1') {
        setChecked({
          group1: { ...group1, [e.target.id]: true },
          group2: { ...checked.group2 },
        });
        setTime(e.target.value);
      }
      if (e.target.name === 'group2') {
        setChecked({
          group1: { ...checked.group1 },
          group2: { ...group2, [e.target.id]: true },
        });
        setCharacters(e.target.value);
      }
    }
    if (leaderboard) {
      if (e.target.name === 'group1') {
        setChecked({
          group1: { ...group1, [e.target.id]: true },
          group2: { ...checked.group2 },
        });
        setFilterTime(e.target.value);
      }
      if (e.target.name === 'group2') {
        setChecked({
          group1: { ...checked.group1 },
          group2: { ...group2, [e.target.id]: true },
        });
        setFilterFind(e.target.value);
      }
    }
  };
  return (
    <SettingsContainer onSubmit={handleSubmit} leaderboard={leaderboard}>
      <ChoicesContainer>
        <RadioGroup divider>
          <Title checked={checked}>Time limit:</Title>
          <RadioLabel>
            {checked.group1[5] ? <Checked /> : <Unchecked />}
            <Description>5 Minutes</Description>
            <HiddenRadio
              id="5"
              type="radio"
              checked={checked.group1[5]}
              onChange={handleChange}
              name="group1"
              value="5"
            />
          </RadioLabel>
          <RadioLabel>
            {checked.group1[10] ? <Checked /> : <Unchecked />}
            <Description>10 Minutes</Description>
            <HiddenRadio
              id="10"
              type="radio"
              checked={checked.group1[10]}
              onChange={handleChange}
              name="group1"
              value="10"
            />
          </RadioLabel>
          <RadioLabel>
            {checked.group1['none'] ? <Checked /> : <Unchecked />}
            <Description>Unlimited</Description>
            <HiddenRadio
              id="none"
              type="radio"
              checked={checked.group1['none']}
              onChange={handleChange}
              name="group1"
              value="none"
            />
          </RadioLabel>
        </RadioGroup>
        <RadioGroup>
          <Title checked={checked}>Characters:</Title>
          <RadioLabel>
            {checked.group2[3] ? <Checked /> : <Unchecked />}
            <Description>Find 3</Description>
            <HiddenRadio
              id="3"
              type="radio"
              checked={checked.group2[3]}
              onChange={handleChange}
              name="group2"
              value="3"
            />
          </RadioLabel>
          <RadioLabel>
            {checked.group2[10] ? <Checked /> : <Unchecked />}
            <Description>Find 10</Description>
            <HiddenRadio
              id="10"
              type="radio"
              checked={checked.group2[10]}
              onChange={handleChange}
              name="group2"
              value="10"
            />
          </RadioLabel>
          <RadioLabel>
            {checked.group2['all'] ? <Checked /> : <Unchecked />}
            <Description>Find All</Description>
            <HiddenRadio
              id="all"
              type="radio"
              checked={checked.group2['all']}
              onChange={handleChange}
              name="group2"
              value="all"
            />
          </RadioLabel>
        </RadioGroup>
      </ChoicesContainer>
      {!leaderboard && helperText && <Alert>{helperText}</Alert>}
      {!leaderboard && <Start type="submit">Start</Start>}
    </SettingsContainer>
  );
};

export default Settings;

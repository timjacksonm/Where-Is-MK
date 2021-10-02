import React, { useState } from 'react';
import './leaderboard.styles.js';
import {
  PageContent,
  Options,
  OptionTitle,
  Container,
  PlacementList,
  Legend,
  ListItem,
  Rank,
  Name,
  CompletionTime,
} from './leaderboard.styles.js';
import { Radio, RadioGroup, FormControlLabel } from '@material-ui/core';
import { useParams } from 'react-router-dom';

const Leaderboard = () => {
  const { timeLimit, amountToFind } = useParams();

  const [filterTime, setFilteredTime] = useState(timeLimit);
  const [filterFind, setFilteredFind] = useState(amountToFind);

  let template = {
    time: { 5: false, 10: false, none: false },
    find: { 3: false, 10: false, all: false },
  };

  const [checked, setChecked] = useState(() => ({
    time: { ...template.time, [timeLimit]: true },
    find: { ...template.find, [amountToFind]: true },
  }));

  const handleRadioChange = (e) => {
    if (e.target.name === 'Time') {
      setChecked({
        time: {
          ...template.time,
          [e.target.value]: true,
        },
        find: { ...checked.find },
      });
      setFilteredTime(e.target.value);
    }
    if (e.target.name === 'Find') {
      setChecked({
        time: { ...checked.time },
        find: {
          ...template.find,
          [e.target.value]: true,
        },
      });
      setFilteredFind(e.target.value);
    }
  };

  const fakeData = {
    53: [
      { rank: '1', name: 'Bob', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
    510: [
      { rank: '1', name: 'Tob', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
    '5all': [
      { rank: '1', name: 'App', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
    103: [
      { rank: '1', name: 'dog', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
    1010: [
      { rank: '1', name: 'cat', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
    '10all': [
      { rank: '1', name: 'alltime', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
    none3: [
      { rank: '1', name: 'makeyaproud', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
    none10: [
      { rank: '1', name: 'Numbuero uno', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
    noneall: [
      { rank: '1', name: 'asdf', time: '00:49:28', id: 1 },
      { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
      { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
      { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
      { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
      { rank: '6', name: '', time: '00:00:00', id: 6 },
      { rank: '7', name: '', time: '00:00:00', id: 7 },
      { rank: '8', name: '', time: '00:00:00', id: 8 },
      { rank: '9', name: '', time: '00:00:00', id: 9 },
      { rank: '10', name: '', time: '00:00:00', id: 10 },
    ],
  };
  return (
    <PageContent>
      <Options>
        <RadioGroup name="Time" onChange={handleRadioChange} row>
          <OptionTitle>Time</OptionTitle>
          <FormControlLabel
            value="5"
            control={<Radio />}
            label="5 Minutes"
            checked={checked.time[5]}
          />
          <FormControlLabel
            value="10"
            control={<Radio />}
            label="10 Minutes"
            checked={checked.time[10]}
          />
          <FormControlLabel
            value="none"
            control={<Radio />}
            label="Unlimited"
            checked={checked.time['none']}
          />
        </RadioGroup>
        <RadioGroup name="Find" onChange={handleRadioChange} row>
          <OptionTitle>Find</OptionTitle>
          <FormControlLabel
            value="3"
            control={<Radio />}
            label="3"
            checked={checked.find[3]}
          />
          <FormControlLabel
            value="10"
            control={<Radio />}
            label="10"
            checked={checked.find[10]}
          />
          <FormControlLabel
            value="all"
            control={<Radio />}
            label="All"
            checked={checked.find['all']}
          />
        </RadioGroup>
      </Options>
      <Container>
        <Legend>
          <Rank>Rank</Rank>
          <Name>Name</Name>
          <CompletionTime>Best Time</CompletionTime>
        </Legend>
        <PlacementList>
          {fakeData[`${filterTime}${filterFind}`].map(
            ({ rank, name, time, id }) => (
              <ListItem key={id}>
                <Rank>{`#${rank}`}</Rank>
                <Name>{name}</Name>
                <CompletionTime>{time}</CompletionTime>
              </ListItem>
            )
          )}
        </PlacementList>
      </Container>
    </PageContent>
  );
};

export default Leaderboard;

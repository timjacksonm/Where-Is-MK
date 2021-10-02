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
  const { timeLimit, amountToFind, completionTime } = useParams();

  const [filterTime, setFilterTime] = useState();
  const [filterFind, setFilterFind] = useState();

  const handleRadioChange = (e) => {
    if (e.target.name === 'Time') {
      setFilterTime(e.target.value);
    }
    if (e.target.name === 'Find') {
      setFilterFind(e.target.value);
    }
  };

  const fakeData = [
    { rank: '1', name: 'Bob', time: '00:49:28', id: 1 },
    { rank: '2', name: 'Tim', time: '00:48:28', id: 2 },
    { rank: '3', name: 'Zander', time: '00:47:28', id: 3 },
    { rank: '4', name: 'Bandit', time: '00:46:28', id: 4 },
    { rank: '5', name: 'Brooke', time: '00:45:28', id: 5 },
  ];
  return (
    <PageContent>
      <Options>
        <RadioGroup
          aria-label="gender"
          name="Time"
          onChange={handleRadioChange}
          row
        >
          <OptionTitle>Time</OptionTitle>
          <FormControlLabel value="5" control={<Radio />} label="5 Minutes" />
          <FormControlLabel value="10" control={<Radio />} label="10 Minutes" />
          <FormControlLabel
            value="Unlimited"
            control={<Radio />}
            label="Unlimited"
          />
        </RadioGroup>
        <RadioGroup
          aria-label="gender"
          name="Find"
          onChange={handleRadioChange}
          row
        >
          <OptionTitle>Find</OptionTitle>
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="10" control={<Radio />} label="10" />
          <FormControlLabel value="All" control={<Radio />} label="All" />
        </RadioGroup>
      </Options>
      <Container>
        <Legend>
          <Rank>Rank</Rank>
          <Name>Name</Name>
          <CompletionTime>Best Time</CompletionTime>
        </Legend>
        <PlacementList>
          {fakeData.map(({ rank, name, time, id }) => (
            <ListItem key={id}>
              <Rank>{`#${rank}`}</Rank>
              <Name>{name}</Name>
              <CompletionTime>{time}</CompletionTime>
            </ListItem>
          ))}
        </PlacementList>
      </Container>
    </PageContent>
  );
};

export default Leaderboard;

import React, { useState, useEffect } from 'react';
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
import { getLeaderboardData } from '../../../firebase/index.js';

const Leaderboard = () => {
  const { timeLimit, amountToFind } = useParams();

  const [filterTime, setFilteredTime] = useState(timeLimit);
  const [filterFind, setFilteredFind] = useState(amountToFind);

  const [leaderboard, setLeaderboard] = useState(null);

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

  useEffect(() => {
    (async function loadData() {
      const data = await getLeaderboardData();
      let sorted;
      //if 5 or 10 minutes. sort by most time remaining
      //if unlimited least amount of time
      if (filterTime === '5' || filterTime === '10') {
        sorted = Object.values(data[`${filterTime}${filterFind}`]).sort(
          function (a, b) {
            return a.time > b.time ? -1 : 1;
          }
        );
      }
      if (filterTime === 'none') {
        sorted = Object.values(data[`${filterTime}${filterFind}`]).sort(
          function (a, b) {
            return a.time > b.time ? 1 : -1;
          }
        );
      }
      setLeaderboard(sorted);
    })();
  }, [filterTime, filterFind]);
  return (
    <PageContent>
      <Options>
        <RadioGroup name="Time" onChange={handleRadioChange} row>
          <OptionTitle>Time</OptionTitle>
          <FormControlLabel
            value="5"
            control={<Radio />}
            label={'5 Minutes'}
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
          {leaderboard &&
            leaderboard.map(({ name, time, id }, index) => {
              return (
                <ListItem key={id}>
                  <Rank>{`#${index + 1}`}</Rank>
                  <Name>{name}</Name>
                  <CompletionTime>{time}</CompletionTime>
                </ListItem>
              );
            })}
        </PlacementList>
      </Container>
    </PageContent>
  );
};

export default Leaderboard;

import React, { useState, useEffect } from 'react';
import './leaderboard.styles.js';
import {
  PageContent,
  Title,
  Container,
  PlacementList,
  Legend,
  ListItem,
  Rank,
  Name,
  CompletionTime,
} from './leaderboard.styles.js';
import Settings from '../../settings/index.js';
import { useParams } from 'react-router-dom';
import { getLeaderboardData } from '../../../firebase/index.js';

const Leaderboard = () => {
  const { timeLimit, amountToFind } = useParams();

  const [filterTime, setFilterTime] = useState(timeLimit);
  const [filterFind, setFilterFind] = useState(amountToFind);

  const [leaderboard, setLeaderboard] = useState(null);

  useEffect(() => {
    (async function loadData() {
      const data = await getLeaderboardData(`${filterTime}${filterFind}`);
      let sorted;
      // if 5 or 10 minutes. sort by most time remaining
      // if unlimited sort by least amount of time
      if (filterTime === '5' || filterTime === '10') {
        sorted = Object.values(data).sort(function (a, b) {
          return a.time > b.time ? -1 : 1;
        });
      }
      if (filterTime === 'none') {
        sorted = Object.values(data).sort(function (a, b) {
          return a.time > b.time ? 1 : -1;
        });
      }
      setLeaderboard(sorted);
    })();
  }, [filterTime, filterFind]);

  return (
    <PageContent>
      <Title>Leaderboards</Title>
      <Settings
        timeLimit={timeLimit}
        amountToFind={amountToFind}
        setFilterTime={setFilterTime}
        setFilterFind={setFilterFind}
        leaderboard
      />
      <Container>
        <Legend>
          <Rank>Rank</Rank>
          <Name>Name</Name>
          <CompletionTime>Best Time</CompletionTime>
        </Legend>
        <PlacementList>
          {leaderboard &&
            leaderboard.map(({ name, time }, index) => {
              return (
                <ListItem key={name}>
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

import React from 'react';
import './leaderboard.styles.js';
import { PageContent } from './leaderboard.styles.js';
import { useParams } from 'react-router-dom';

const Leaderboard = () => {
  const { timeLimit, amountToFind, completionTime } = useParams();

  return (
    <PageContent>
      {`You found all ${amountToFind} characters within ${timeLimit} Minutes congratulations! Your completion time was ${completionTime}`}
    </PageContent>
  );
};

export default Leaderboard;

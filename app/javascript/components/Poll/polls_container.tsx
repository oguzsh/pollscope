import React from 'react';

import { withProvider } from 'providers/graphql';
import { useQuery } from '@apollo/client';
import { ALL_POLLS } from 'queries/pool';

import Polls from './polls';

import './poll.css';

const PollsContainer: React.FC = () => {
  const { data, loading, error } = useQuery(ALL_POLLS);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error : ${error.message}</span>;

  const choices = (poll) =>
    poll.choices.map((choice) => ({
      option: choice.choiceText,
      votes: choice.voteCount,
      id: choice.id,
    }));

  const pools = data.polls.map((poll) => ({
    id: poll.id,
    question: poll.question,
    answers: choices(poll),
  }));

  return (
    <div className='container'>
      <h1>Pools</h1>
      <Polls polls={pools} />
    </div>
  );
};

export default withProvider(PollsContainer);

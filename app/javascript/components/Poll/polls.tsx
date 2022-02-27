import React, { useState, useEffect } from 'react';

import Poll from 'react-polls';

const Polls = ({ polls }): any => {
  const [pollData, updatePollData] = useState([]);

  const pollStyles = {
    questionSeparator: true,
    questionSeparatorWidth: 'question',
    questionBold: false,
    questionColor: '#303030',
    align: 'center',
    theme: 'purple',
  };

  useEffect(() => {
    updatePollData(polls);
  }, [polls]);

  const handleVote = (voteAnswer, pollNumber) => {
    const newPollData = [...pollData];

    newPollData.map((poll) =>
      poll.id === pollNumber
        ? poll.answers.map((answer) =>
            answer.option === voteAnswer ? answer.votes++ : null
          )
        : null
    );

    updatePollData(newPollData);
  };

  return pollData.map((poll) => (
    <div className='poll-box' key={poll.id}>
      <Poll
        question={poll.question}
        answers={poll.answers}
        onVote={(voteAnswer) => handleVote(voteAnswer, poll.id)}
        customStyles={pollStyles}
      />
    </div>
  ));
};

export default Polls;

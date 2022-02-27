import React from 'react';

import { withProvider } from 'providers/graphql';
import { useQuery } from '@apollo/client';
import { ALL_USERS } from 'queries/user';

import UserCard from './user_card';

const Users: React.FC = () => {
  const { data, loading, error } = useQuery(ALL_USERS);

  if (loading) return <span>Loading...</span>;
  if (error) return <span>Error : ${error.message}</span>;

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {data.users.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default withProvider(Users);

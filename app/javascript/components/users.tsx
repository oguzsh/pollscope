import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { withProvider } from 'providers/graphql';
import UserCard from './user_card';

const usersQuery = gql`
  query allUsers {
    users {
      id
      name
    }
  }
`;

const Users = () => {
  const { data, loading, error } = useQuery(usersQuery);
  if (loading) {
    return <span>Loading...</span>;
  }
  return (
    <div>
      <h1>Books</h1>
      <ul>
        {data.users.map((user) => (
          <UserCard {...user} key={user.id} />
        ))}
      </ul>
    </div>
  );
};

export default withProvider(Users);

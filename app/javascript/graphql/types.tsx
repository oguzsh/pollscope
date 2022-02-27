import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Choice = {
  __typename?: 'Choice';
  choiceText?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  pollId: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  voteCount: Scalars['Int'];
  votes: Array<Vote>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Poll = {
  __typename?: 'Poll';
  choices: Array<Choice>;
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  question?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  userId: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  choices: Array<Choice>;
  polls: Array<Poll>;
  users: Array<User>;
  votes: Array<Vote>;
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['ISO8601DateTime'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  polls?: Maybe<Array<Poll>>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Vote = {
  __typename?: 'Vote';
  choiceId: Scalars['Int'];
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  pollId: Scalars['Int'];
  updatedAt: Scalars['ISO8601DateTime'];
  userId: Scalars['Int'];
};

export type AllPollsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPollsQuery = { __typename?: 'Query', polls: Array<{ __typename?: 'Poll', id: string, question?: string | null, choices: Array<{ __typename?: 'Choice', choiceText?: string | null, voteCount: number }> }> };

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name?: string | null }> };


export const AllPollsDocument = gql`
    query allPolls {
  polls {
    id
    question
    choices {
      choiceText
      voteCount
    }
  }
}
    `;

/**
 * __useAllPollsQuery__
 *
 * To run a query within a React component, call `useAllPollsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPollsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPollsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPollsQuery(baseOptions?: Apollo.QueryHookOptions<AllPollsQuery, AllPollsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPollsQuery, AllPollsQueryVariables>(AllPollsDocument, options);
      }
export function useAllPollsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPollsQuery, AllPollsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPollsQuery, AllPollsQueryVariables>(AllPollsDocument, options);
        }
export type AllPollsQueryHookResult = ReturnType<typeof useAllPollsQuery>;
export type AllPollsLazyQueryHookResult = ReturnType<typeof useAllPollsLazyQuery>;
export type AllPollsQueryResult = Apollo.QueryResult<AllPollsQuery, AllPollsQueryVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  users {
    id
    name
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
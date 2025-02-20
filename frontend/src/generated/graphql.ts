import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Artist = {
  __typename?: 'Artist';
  bio?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  profileUrl?: Maybe<Scalars['String']['output']>;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticate?: Maybe<AuthPayload>;
  createArtist?: Maybe<Artist>;
  createSong?: Maybe<Song>;
  deleteSong?: Maybe<Song>;
  updateSong?: Maybe<Song>;
};

export type MutationAuthenticateArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type MutationCreateArtistArgs = {
  bio?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  profileUrl?: InputMaybe<Scalars['String']['input']>;
};

export type MutationCreateSongArgs = {
  input: SongInput;
};

export type MutationDeleteSongArgs = {
  id: Scalars['ID']['input'];
};

export type MutationUpdateSongArgs = {
  id: Scalars['ID']['input'];
  input: SongInput;
};

export type Query = {
  __typename?: 'Query';
  Song?: Maybe<Song>;
  getAllArtists?: Maybe<Array<Maybe<Artist>>>;
  getArtist?: Maybe<Artist>;
  getSongs?: Maybe<Array<Maybe<Song>>>;
};

export type QuerySongArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetArtistArgs = {
  id: Scalars['ID']['input'];
};

export type QueryGetSongsArgs = {
  artist?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type Song = {
  __typename?: 'Song';
  albumName?: Maybe<Scalars['String']['output']>;
  artist: Artist;
  coverArtUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export type SongInput = {
  albumName?: InputMaybe<Scalars['String']['input']>;
  artist: Scalars['ID']['input'];
  coverArtUrl?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type NewArtistFragment = {
  __typename?: 'Artist';
  id: string;
  name: string;
  bio?: string | null;
  profileUrl?: string | null;
};

export type AuthenticateMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;

export type AuthenticateMutation = {
  __typename?: 'Mutation';
  authenticate?: { __typename?: 'AuthPayload'; token: string } | null;
};

export type CreateArtistMutationVariables = Exact<{
  name: Scalars['String']['input'];
  profileUrl?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
}>;

export type CreateArtistMutation = {
  __typename?: 'Mutation';
  createArtist?: {
    __typename?: 'Artist';
    id: string;
    name: string;
    bio?: string | null;
    profileUrl?: string | null;
  } | null;
};

export type CreateSongMutationVariables = Exact<{
  input: SongInput;
}>;

export type CreateSongMutation = {
  __typename?: 'Mutation';
  createSong?: {
    __typename?: 'Song';
    id: string;
    name: string;
    albumName?: string | null;
    year?: number | null;
    coverArtUrl?: string | null;
    artist: { __typename?: 'Artist'; id: string; name: string };
  } | null;
};

export type DeleteSongMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type DeleteSongMutation = {
  __typename?: 'Mutation';
  deleteSong?: {
    __typename?: 'Song';
    id: string;
    name: string;
    year?: number | null;
  } | null;
};

export type GetAllArtistsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllArtistsQuery = {
  __typename?: 'Query';
  getAllArtists?: Array<{
    __typename?: 'Artist';
    id: string;
    name: string;
    bio?: string | null;
  } | null> | null;
};

export type GetArtistQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;

export type GetArtistQuery = {
  __typename?: 'Query';
  getArtist?: { __typename?: 'Artist'; id: string; name: string } | null;
};

export type GetSongsQueryVariables = Exact<{
  artist?: InputMaybe<Scalars['ID']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
}>;

export type GetSongsQuery = {
  __typename?: 'Query';
  getSongs?: Array<{
    __typename?: 'Song';
    id: string;
    name: string;
    year?: number | null;
    artist: { __typename?: 'Artist'; id: string; name: string };
  } | null> | null;
};

export type GetAllSongsQueryVariables = Exact<{
  artist: Scalars['ID']['input'];
}>;

export type GetAllSongsQuery = {
  __typename?: 'Query';
  getSongs?: Array<{
    __typename?: 'Song';
    id: string;
    name: string;
    year?: number | null;
    artist: { __typename?: 'Artist'; name: string };
  } | null> | null;
};

export type GetSongsCompleteQueryVariables = Exact<{
  artist: Scalars['ID']['input'];
}>;

export type GetSongsCompleteQuery = {
  __typename?: 'Query';
  getSongs?: Array<{
    __typename?: 'Song';
    id: string;
    name: string;
    year?: number | null;
    artist: { __typename?: 'Artist'; id: string; name: string };
  } | null> | null;
};

export type NewSongFragment = {
  __typename?: 'Song';
  id: string;
  name: string;
  year?: number | null;
};

export const NewArtistFragmentDoc = gql`
  fragment NewArtist on Artist {
    id
    name
    bio
    profileUrl
  }
`;
export const NewSongFragmentDoc = gql`
  fragment NewSong on Song {
    id
    name
    year
  }
`;
export const AuthenticateDocument = gql`
  mutation Authenticate($username: String!, $password: String!) {
    authenticate(username: $username, password: $password) {
      token
    }
  }
`;
export type AuthenticateMutationFn = Apollo.MutationFunction<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;

/**
 * __useAuthenticateMutation__
 *
 * To run a mutation, you first call `useAuthenticateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthenticateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authenticateMutation, { data, loading, error }] = useAuthenticateMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthenticateMutation(
  baseOptions?: Apollo.MutationHookOptions<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    AuthenticateMutation,
    AuthenticateMutationVariables
  >(AuthenticateDocument, options);
}
export type AuthenticateMutationHookResult = ReturnType<
  typeof useAuthenticateMutation
>;
export type AuthenticateMutationResult =
  Apollo.MutationResult<AuthenticateMutation>;
export type AuthenticateMutationOptions = Apollo.BaseMutationOptions<
  AuthenticateMutation,
  AuthenticateMutationVariables
>;
export const CreateArtistDocument = gql`
  mutation CreateArtist($name: String!, $profileUrl: String, $bio: String) {
    createArtist(name: $name, profileUrl: $profileUrl, bio: $bio) {
      ...NewArtist
    }
  }
  ${NewArtistFragmentDoc}
`;
export type CreateArtistMutationFn = Apollo.MutationFunction<
  CreateArtistMutation,
  CreateArtistMutationVariables
>;

/**
 * __useCreateArtistMutation__
 *
 * To run a mutation, you first call `useCreateArtistMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateArtistMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createArtistMutation, { data, loading, error }] = useCreateArtistMutation({
 *   variables: {
 *      name: // value for 'name'
 *      profileUrl: // value for 'profileUrl'
 *      bio: // value for 'bio'
 *   },
 * });
 */
export function useCreateArtistMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateArtistMutation,
    CreateArtistMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<
    CreateArtistMutation,
    CreateArtistMutationVariables
  >(CreateArtistDocument, options);
}
export type CreateArtistMutationHookResult = ReturnType<
  typeof useCreateArtistMutation
>;
export type CreateArtistMutationResult =
  Apollo.MutationResult<CreateArtistMutation>;
export type CreateArtistMutationOptions = Apollo.BaseMutationOptions<
  CreateArtistMutation,
  CreateArtistMutationVariables
>;
export const CreateSongDocument = gql`
  mutation CreateSong($input: SongInput!) {
    createSong(input: $input) {
      id
      name
      artist {
        id
        name
      }
      albumName
      year
      coverArtUrl
    }
  }
`;
export type CreateSongMutationFn = Apollo.MutationFunction<
  CreateSongMutation,
  CreateSongMutationVariables
>;

/**
 * __useCreateSongMutation__
 *
 * To run a mutation, you first call `useCreateSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSongMutation, { data, loading, error }] = useCreateSongMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateSongMutation(
  baseOptions?: Apollo.MutationHookOptions<
    CreateSongMutation,
    CreateSongMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateSongMutation, CreateSongMutationVariables>(
    CreateSongDocument,
    options
  );
}
export type CreateSongMutationHookResult = ReturnType<
  typeof useCreateSongMutation
>;
export type CreateSongMutationResult =
  Apollo.MutationResult<CreateSongMutation>;
export type CreateSongMutationOptions = Apollo.BaseMutationOptions<
  CreateSongMutation,
  CreateSongMutationVariables
>;
export const DeleteSongDocument = gql`
  mutation DeleteSong($id: ID!) {
    deleteSong(id: $id) {
      ...NewSong
    }
  }
  ${NewSongFragmentDoc}
`;
export type DeleteSongMutationFn = Apollo.MutationFunction<
  DeleteSongMutation,
  DeleteSongMutationVariables
>;

/**
 * __useDeleteSongMutation__
 *
 * To run a mutation, you first call `useDeleteSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteSongMutation, { data, loading, error }] = useDeleteSongMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteSongMutation(
  baseOptions?: Apollo.MutationHookOptions<
    DeleteSongMutation,
    DeleteSongMutationVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<DeleteSongMutation, DeleteSongMutationVariables>(
    DeleteSongDocument,
    options
  );
}
export type DeleteSongMutationHookResult = ReturnType<
  typeof useDeleteSongMutation
>;
export type DeleteSongMutationResult =
  Apollo.MutationResult<DeleteSongMutation>;
export type DeleteSongMutationOptions = Apollo.BaseMutationOptions<
  DeleteSongMutation,
  DeleteSongMutationVariables
>;
export const GetAllArtistsDocument = gql`
  query GetAllArtists {
    getAllArtists {
      id
      name
      bio
    }
  }
`;

/**
 * __useGetAllArtistsQuery__
 *
 * To run a query within a React component, call `useGetAllArtistsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllArtistsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllArtistsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllArtistsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetAllArtistsQuery,
    GetAllArtistsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllArtistsQuery, GetAllArtistsQueryVariables>(
    GetAllArtistsDocument,
    options
  );
}
export function useGetAllArtistsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllArtistsQuery,
    GetAllArtistsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllArtistsQuery, GetAllArtistsQueryVariables>(
    GetAllArtistsDocument,
    options
  );
}
export function useGetAllArtistsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllArtistsQuery,
        GetAllArtistsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetAllArtistsQuery,
    GetAllArtistsQueryVariables
  >(GetAllArtistsDocument, options);
}
export type GetAllArtistsQueryHookResult = ReturnType<
  typeof useGetAllArtistsQuery
>;
export type GetAllArtistsLazyQueryHookResult = ReturnType<
  typeof useGetAllArtistsLazyQuery
>;
export type GetAllArtistsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllArtistsSuspenseQuery
>;
export type GetAllArtistsQueryResult = Apollo.QueryResult<
  GetAllArtistsQuery,
  GetAllArtistsQueryVariables
>;
export const GetArtistDocument = gql`
  query GetArtist($id: ID!) {
    getArtist(id: $id) {
      id
      name
    }
  }
`;

/**
 * __useGetArtistQuery__
 *
 * To run a query within a React component, call `useGetArtistQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArtistQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArtistQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetArtistQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetArtistQuery,
    GetArtistQueryVariables
  > &
    ({ variables: GetArtistQueryVariables; skip?: boolean } | { skip: boolean })
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetArtistQuery, GetArtistQueryVariables>(
    GetArtistDocument,
    options
  );
}
export function useGetArtistLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetArtistQuery,
    GetArtistQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetArtistQuery, GetArtistQueryVariables>(
    GetArtistDocument,
    options
  );
}
export function useGetArtistSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetArtistQuery, GetArtistQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetArtistQuery, GetArtistQueryVariables>(
    GetArtistDocument,
    options
  );
}
export type GetArtistQueryHookResult = ReturnType<typeof useGetArtistQuery>;
export type GetArtistLazyQueryHookResult = ReturnType<
  typeof useGetArtistLazyQuery
>;
export type GetArtistSuspenseQueryHookResult = ReturnType<
  typeof useGetArtistSuspenseQuery
>;
export type GetArtistQueryResult = Apollo.QueryResult<
  GetArtistQuery,
  GetArtistQueryVariables
>;
export const GetSongsDocument = gql`
  query GetSongs($artist: ID, $sort: String) {
    getSongs(artist: $artist, sort: $sort) {
      id
      name
      year
      artist {
        id
        name
      }
    }
  }
`;

/**
 * __useGetSongsQuery__
 *
 * To run a query within a React component, call `useGetSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongsQuery({
 *   variables: {
 *      artist: // value for 'artist'
 *      sort: // value for 'sort'
 *   },
 * });
 */
export function useGetSongsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetSongsQuery, GetSongsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSongsQuery, GetSongsQueryVariables>(
    GetSongsDocument,
    options
  );
}
export function useGetSongsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSongsQuery,
    GetSongsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetSongsQuery, GetSongsQueryVariables>(
    GetSongsDocument,
    options
  );
}
export function useGetSongsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<GetSongsQuery, GetSongsQueryVariables>
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetSongsQuery, GetSongsQueryVariables>(
    GetSongsDocument,
    options
  );
}
export type GetSongsQueryHookResult = ReturnType<typeof useGetSongsQuery>;
export type GetSongsLazyQueryHookResult = ReturnType<
  typeof useGetSongsLazyQuery
>;
export type GetSongsSuspenseQueryHookResult = ReturnType<
  typeof useGetSongsSuspenseQuery
>;
export type GetSongsQueryResult = Apollo.QueryResult<
  GetSongsQuery,
  GetSongsQueryVariables
>;
export const GetAllSongsDocument = gql`
  query GetAllSongs($artist: ID!) {
    getSongs(artist: $artist) {
      id
      name
      year
      artist {
        name
      }
    }
  }
`;

/**
 * __useGetAllSongsQuery__
 *
 * To run a query within a React component, call `useGetAllSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllSongsQuery({
 *   variables: {
 *      artist: // value for 'artist'
 *   },
 * });
 */
export function useGetAllSongsQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetAllSongsQuery,
    GetAllSongsQueryVariables
  > &
    (
      | { variables: GetAllSongsQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetAllSongsQuery, GetAllSongsQueryVariables>(
    GetAllSongsDocument,
    options
  );
}
export function useGetAllSongsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetAllSongsQuery,
    GetAllSongsQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<GetAllSongsQuery, GetAllSongsQueryVariables>(
    GetAllSongsDocument,
    options
  );
}
export function useGetAllSongsSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetAllSongsQuery,
        GetAllSongsQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<GetAllSongsQuery, GetAllSongsQueryVariables>(
    GetAllSongsDocument,
    options
  );
}
export type GetAllSongsQueryHookResult = ReturnType<typeof useGetAllSongsQuery>;
export type GetAllSongsLazyQueryHookResult = ReturnType<
  typeof useGetAllSongsLazyQuery
>;
export type GetAllSongsSuspenseQueryHookResult = ReturnType<
  typeof useGetAllSongsSuspenseQuery
>;
export type GetAllSongsQueryResult = Apollo.QueryResult<
  GetAllSongsQuery,
  GetAllSongsQueryVariables
>;
export const GetSongsCompleteDocument = gql`
  query GetSongsComplete($artist: ID!) {
    getSongs(artist: $artist) {
      id
      name
      year
      artist {
        id
        name
      }
    }
  }
`;

/**
 * __useGetSongsCompleteQuery__
 *
 * To run a query within a React component, call `useGetSongsCompleteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSongsCompleteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSongsCompleteQuery({
 *   variables: {
 *      artist: // value for 'artist'
 *   },
 * });
 */
export function useGetSongsCompleteQuery(
  baseOptions: Apollo.QueryHookOptions<
    GetSongsCompleteQuery,
    GetSongsCompleteQueryVariables
  > &
    (
      | { variables: GetSongsCompleteQueryVariables; skip?: boolean }
      | { skip: boolean }
    )
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<GetSongsCompleteQuery, GetSongsCompleteQueryVariables>(
    GetSongsCompleteDocument,
    options
  );
}
export function useGetSongsCompleteLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetSongsCompleteQuery,
    GetSongsCompleteQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<
    GetSongsCompleteQuery,
    GetSongsCompleteQueryVariables
  >(GetSongsCompleteDocument, options);
}
export function useGetSongsCompleteSuspenseQuery(
  baseOptions?:
    | Apollo.SkipToken
    | Apollo.SuspenseQueryHookOptions<
        GetSongsCompleteQuery,
        GetSongsCompleteQueryVariables
      >
) {
  const options =
    baseOptions === Apollo.skipToken
      ? baseOptions
      : { ...defaultOptions, ...baseOptions };
  return Apollo.useSuspenseQuery<
    GetSongsCompleteQuery,
    GetSongsCompleteQueryVariables
  >(GetSongsCompleteDocument, options);
}
export type GetSongsCompleteQueryHookResult = ReturnType<
  typeof useGetSongsCompleteQuery
>;
export type GetSongsCompleteLazyQueryHookResult = ReturnType<
  typeof useGetSongsCompleteLazyQuery
>;
export type GetSongsCompleteSuspenseQueryHookResult = ReturnType<
  typeof useGetSongsCompleteSuspenseQuery
>;
export type GetSongsCompleteQueryResult = Apollo.QueryResult<
  GetSongsCompleteQuery,
  GetSongsCompleteQueryVariables
>;

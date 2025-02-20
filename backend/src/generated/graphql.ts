/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-object-type */

import { GraphQLResolveInfo } from 'graphql';
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
> = {
  [_ in K]?: never;
};
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Artist: ResolverTypeWrapper<Artist>;
  AuthPayload: ResolverTypeWrapper<AuthPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Song: ResolverTypeWrapper<Song>;
  SongInput: SongInput;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Artist: Artist;
  AuthPayload: AuthPayload;
  Boolean: Scalars['Boolean']['output'];
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Song: Song;
  SongInput: SongInput;
  String: Scalars['String']['output'];
};

export type ArtistResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Artist'] = ResolversParentTypes['Artist'],
> = {
  bio?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profileUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthPayloadResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['AuthPayload'] = ResolversParentTypes['AuthPayload'],
> = {
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation'],
> = {
  authenticate?: Resolver<
    Maybe<ResolversTypes['AuthPayload']>,
    ParentType,
    ContextType,
    RequireFields<MutationAuthenticateArgs, 'password' | 'username'>
  >;
  createArtist?: Resolver<
    Maybe<ResolversTypes['Artist']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateArtistArgs, 'name'>
  >;
  createSong?: Resolver<
    Maybe<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateSongArgs, 'input'>
  >;
  deleteSong?: Resolver<
    Maybe<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteSongArgs, 'id'>
  >;
  updateSong?: Resolver<
    Maybe<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateSongArgs, 'id' | 'input'>
  >;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Query'] = ResolversParentTypes['Query'],
> = {
  Song?: Resolver<
    Maybe<ResolversTypes['Song']>,
    ParentType,
    ContextType,
    RequireFields<QuerySongArgs, 'id'>
  >;
  getAllArtists?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Artist']>>>,
    ParentType,
    ContextType
  >;
  getArtist?: Resolver<
    Maybe<ResolversTypes['Artist']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetArtistArgs, 'id'>
  >;
  getSongs?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Song']>>>,
    ParentType,
    ContextType,
    Partial<QueryGetSongsArgs>
  >;
};

export type SongResolvers<
  ContextType = any,
  ParentType extends
    ResolversParentTypes['Song'] = ResolversParentTypes['Song'],
> = {
  albumName?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  artist?: Resolver<ResolversTypes['Artist'], ParentType, ContextType>;
  coverArtUrl?: Resolver<
    Maybe<ResolversTypes['String']>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Artist?: ArtistResolvers<ContextType>;
  AuthPayload?: AuthPayloadResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
};

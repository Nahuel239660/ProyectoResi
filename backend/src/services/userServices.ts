import { User } from '../types';
import 'dotenv/config';
export const users: User[] = [
  {
    id: '1',
    username: 'user1',
    password: process.env.USER1_PASSWORD || '',
    email: 'user1@example.com',
    role: 'admin',
  },
  {
    id: '2',
    username: 'user2',
    password: process.env.USER2_PASSWORD || '',
    email: 'user2@example.com',
    role: 'user',
  },
  {
    id: '3',
    username: 'guest1',
    password: process.env.GUEST1_PASSWORD || '',
    email: 'guest1@example.com',
    role: 'guest',
  },
];

export const getUserByUsername = (username: string): User | undefined => {
  return users.find((user) => user.username === username);
};

export const getUserById = (id: string): User | undefined => {
  return users.find((user) => user.id === id);
};

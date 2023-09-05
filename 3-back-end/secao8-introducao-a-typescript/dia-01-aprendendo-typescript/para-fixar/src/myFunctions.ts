import users from './data';
import { User } from './types/User';

export const getUsersName = (userList: User[]): string[] =>
  userList.map((user) => user.name);

export const getUsersByRepoQuantity = (
  users: User[],
  repos: number
): string[] =>
  users.filter((user) => user.repositories >= repos).map((user) => user.name);

export const itsMostActiveUser = (name: string, users: User[]): boolean => {
  const mostActive = users.reduce((acc, crr) =>
    crr.repositories >= acc.repositories ? crr : acc
  );

  return name == mostActive.name;
};

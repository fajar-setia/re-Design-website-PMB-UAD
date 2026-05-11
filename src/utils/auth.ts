import { dummyUsers } from "../data/dummyUsers";

export type User = {
  name: string;
  email: string;
  password: string;
};

const STORAGE_USER_KEY = "registeredUsers";

export function getStoredUsers(): User[] {
  const stored = localStorage.getItem(STORAGE_USER_KEY);
  if (!stored) return [];

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getUsers(): User[] {
  return [...dummyUsers, ...getStoredUsers()];
}

export function findUser(email: string, password: string) {
  return getUsers().find((user) => user.email === email && user.password === password);
}

export function userExists(email: string) {
  return getUsers().some((user) => user.email === email);
}

export function addUser(user: User) {
  const nextUsers = [...getStoredUsers(), user];
  localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(nextUsers));
}

export const isAuthenticated = () => {
  return localStorage.getItem("token") === "true";
};

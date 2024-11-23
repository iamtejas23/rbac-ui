import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  getUsers,
  getRoles,
  addUser,
  updateUser,
  deleteUser,
} from '../api/mockApi';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getUsers();
      const fetchedRoles = await getRoles();
      setUsers(fetchedUsers);
      setRoles(fetchedRoles);
    };
    fetchData();
  }, []);

  const addUserHandler = async (user) => {
    const newUser = await addUser(user);
    setUsers((prev) => [...prev, newUser]);
  };

  const updateUserHandler = async (user) => {
    const updatedUser = await updateUser(user);
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );
  };

  const deleteUserHandler = async (id) => {
    await deleteUser(id);
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        users,
        roles,
        addUserHandler,
        updateUserHandler,
        deleteUserHandler,
        setUsers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

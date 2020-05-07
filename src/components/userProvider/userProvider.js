import React, { createContext, useState, useEffect } from 'react';
import firebase from 'FB';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    (async function getAuthState() {
      await firebase.auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        // console.log('Provider -> currentUser:', user);
      });
    })();
  }, []);

  return (!currentUser ? <h1>Loading...</h1> :
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
}

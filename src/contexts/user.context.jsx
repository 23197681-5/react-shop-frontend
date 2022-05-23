import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
//actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//provider alias component
export const UserProvier = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const valueSharer = { currentUser, setCurrentUser };
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={valueSharer}>{children}</UserContext.Provider>
  );
};

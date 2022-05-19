import { createContext, useState } from "react";

//actual value
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//provider alias component
export const UserProvier = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const valueSharer = { currentUser, setCurrentUser };

  return (
    <UserContext.Provider value={valueSharer}>{children}</UserContext.Provider>
  );
};

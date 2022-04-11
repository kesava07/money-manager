import React, { createContext } from "react";

const user = {
  name: "There",
  id: "ns12nkj12",
};

export const UserContext = createContext();

export default function UserContextWrapper({ children }) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

import React, { useState, createContext } from "react";
import BoxB from "./BoxB";

export const UserContext = createContext();

function BoxA() {
  const [user, setUser] = useState("Halima");
  return (
    <div className="box">
      <h1>BoxA</h1>
      <h3>{`Hello ${user}`}</h3>
      <UserContext.Provider value={user}>
        <BoxB user={user} />
      </UserContext.Provider>
    </div>
  );
}
export default BoxA;

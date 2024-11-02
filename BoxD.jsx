import React, { useContext } from "react";
import { UserContext } from "./BoxA";

function BoxD() {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h1>BoxD</h1>
      <h3>{`bye ${user}`}</h3>
    </div>
  );
}
export default BoxD;

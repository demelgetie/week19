import {useContext} from "react";
import { UserContext } from "../App.jsx";

function Settings() {
  // Access the same context
  const user = useContext(UserContext);

  return (
    <div
      style={{ backgroundColor: "#e8f7ff", padding: "10px", margin: "10px" }}
    >
      <h2>Settings Component</h2>
      <p>Current user: {user.name}</p>
      <p>
        Role permissions:{" "}
        {user.role === "Data Analyst"
          ? "Read & Analyze Data"
          : "General Access"}
      </p>
    </div>
  );
}

export default Settings;




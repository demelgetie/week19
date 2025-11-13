import "./App.css";
// import IncreaseDecreaseCount from "./Components/IncreaseDecreaseCount.jsx";
// import UseEffectForTitle from "./Components/UseEffectForTitle.jsx";
// import MyCounter from "./Components/MyCounter.jsx";
import { createContext } from "react";
import Dashboard from "./Components/Dashboard.jsx";
import UseReducer from "./Components/UseResducer.jsx";

// Create the context
export const UserContext = createContext();

function App() {
  const user = { name: "Group one", role: "Data Analyst" };
  return (
    <>
      {/* <MyCounter />
      <IncreaseDecreaseCount />
      <UseEffectForTitle /> */}

      {/* Parent component: Provides the value */}
      <UserContext.Provider value={user}>
        <h1>Welcome to the Dashboard</h1>
        <Dashboard />
      </UserContext.Provider>

      <UseReducer />
    </>
  );
}

export default App;

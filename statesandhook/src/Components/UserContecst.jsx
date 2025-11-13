import React, { createContext, useContext } from "react";

// // 1️⃣ Create the context
// const UserContext = createContext();

// // 2️⃣ Parent component: Provides the value
// function App() {
//   const user = { name: "Rediet Teshome", role: "Data Analyst" };

//   return (
//     // Make user data available to all children
//     <UserContext.Provider value={user}>
//       <h1>Welcome to the Dashboard</h1>
//       <Dashboard />
//       <Settings />
//     </UserContext.Provider>
//   );
// }

// 3️⃣ First child: Dashboard
// function Dashboard() {
//   // Access the context
//   const user = useContext(UserContext);

//   return (
//     <div
//       style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px" }}
//     >
//       <h2>Dashboard Component</h2>
//       <p>👤 User: {user.name}</p>
//       <p>💼 Role: {user.role}</p>
//     </div>
//   );
// }

// 4️⃣ Second child: Settings
// function Settings() {
//   // Access the same context
//   const user = useContext(UserContext);

//   return (
//     <div
//       style={{ backgroundColor: "#e8f7ff", padding: "10px", margin: "10px" }}
//     >
//       <h2>Settings Component</h2>
//       <p>Current user: {user.name}</p>
//       <p>
//         Role permissions:{" "}
//         {user.role === "Data Analyst"
//           ? "Read & Analyze Data"
//           : "General Access"}
//       </p>
//     </div>
//   );
// }

// export default App;

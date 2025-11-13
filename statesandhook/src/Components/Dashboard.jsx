import {useContext} from 'react'
import Settings from './Settings.jsx';
import { UserContext } from '../App.jsx';



function Dashboard() {
  // Access the context

  const user = useContext(UserContext);

  return (
    <div
      style={{ backgroundColor: "#f0f0f0", padding: "10px", margin: "10px" }}
    >
      <h2>Dashboard Component</h2>
      <p>👤 User: {user.name}</p>
      <p>💼 Role: {user.role}</p>

      <Settings />
    </div>
  );
}

export default Dashboard;
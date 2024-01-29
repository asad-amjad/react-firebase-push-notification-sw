import { useEffect } from "react";
import { getToken } from "firebase/messaging";

import "./App.css";

function App() {
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // continue success
      // Generate Token
    } else {
      alert("You denied for the notifications");
    }
  };

  useEffect(() => { }, []);

  return <button onClick={() => requestPermission()}>Get Permission</button>;
}

export default App;

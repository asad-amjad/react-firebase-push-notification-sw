import { useEffect } from "react";
import { messaging } from "../firebase";
import { getToken } from "firebase/messaging";

import "./App.css";

function App() {
  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // continue success
      // Generate Token
      // getToken(messaging)
      const token = await getToken(messaging, { vapidKey: "BCUoGVKzIj6iq9nCUGAjgW0ScfufySjrtbYO64oeFweyK7MxTESVPfUaR0B4r8ZosUnr7ogDxOLFEDnt_5WEu24" });
      console.log(token)

    } else {
      alert("You denied for the notifications");
    }
  };

  useEffect(() => { 

    console.log(messaging)
    // messaging.onMessage((payload) => {
    //   console.log('Foreground message received:', payload);
    //   // Add your logic to handle the foreground message in your app
    // });

    // // Handle background messages
    // messaging.onBackgroundMessage((payload) => {
    //   console.log('Background message received:', payload);
    //   // Add your logic to handle the background message in your app
    // });

    // // Cleanup the messaging instance when the component unmounts
    // return () => {
    //   // Note: This will remove all message handlers
    //   messaging.onMessage((payload) => {});
    //   messaging.onBackgroundMessage((payload) => {});
    // };

  }, [messaging]);

  return <button onClick={() => requestPermission()}>Get Permission</button>;
}

export default App;

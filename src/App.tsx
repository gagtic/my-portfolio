import { useEffect } from "react";
import AppWrapper from "./components/AppWrapper";
import Home from "./screens/Home";
import { FIREBASE_ANALYTICS_EVENTS, sendFireabseEvent } from "./utils/firebase";

const App = () => {
  useEffect(() => {
    sendFireabseEvent(FIREBASE_ANALYTICS_EVENTS.WEBSITE_OPENED);
  }, []);

  return (
    <AppWrapper>
      <Home />
    </AppWrapper>
  );
};

export default App;

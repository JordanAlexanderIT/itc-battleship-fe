import Navbar from "../Components/Navbar.jsx";
import AppContextProvider from "./AppContextProvider.jsx";
import ChallengeOpponent from "../Components/GameSession/ChallengeOpponent.jsx";

function OrsTestingPage() {
  return (
    <div>
      <AppContextProvider>
        <Navbar></Navbar>
        <ChallengeOpponent></ChallengeOpponent>
      </AppContextProvider>
    </div>
  );
}

export default OrsTestingPage;

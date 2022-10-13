
import './App.css';
import Header from "./layouts/header/header";
import Footer from "./layouts/Footer/Index";
import TopContent from "./Components/TopContent/index";
import OurMission from "./Components/OurMission/Index";
import OurInitiatives from "./Components/OurInitiatives/Index";
import Chairman from "./Components/Chairman/Index";
import OurTeam from "./Components/OurTeam/Index";
function App() {
  return (
    <div className="App">
        <Header/>
        <TopContent/>
        <OurMission/>
        <OurInitiatives/>
        <Chairman/>
        <OurTeam/>
        <Footer/>
    </div>
  );
}

export default App;

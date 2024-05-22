import './App.css';
import CreateMission from './components/CreateMission';
import AllMissions from './components/AllMissions';
import MissionsStatus from './components/MissionsStatus';

function App() {
  return (
    <div className="App">
      <CreateMission/>
      <MissionsStatus/>
      <AllMissions/>
    </div>
  );
}

export default App;

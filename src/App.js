import './App.css';
import Clicker from './components/Clicker';

function App() {

  let RoomCount = 1;

  /* const RoomCount = [
    { name: "Eins", Nummer: 1 },
    { name: "Zwei", Nummer: 2 },
    { name: "Drei", Nummer: 3 }
  ]; */

  return (
    <div className="App">
      <p> This is the Lobby... </p>
      {RoomCount.map((sum) => (
        <Clicker RoomCount={sum[i]} />
      ))}  
      <button onClick={ RoomCount += 1}>BUY</button>
    </div>
  );
}

export default App;

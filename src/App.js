import './App.css';
import Clicker from './components/Clicker';

function App() {

  //let RoomCount = 1;

  const RoomCount = [
    { name: "Eins", nr: 1 },
    { name: "Zwei", nr: 2 },
    { name: "Drei", nr: 3 },
    { name: "Vier", nr: 4 },
    { name: "Fünf", nr: 5 }
  ]; 

  return (
    <div className="App">
      <p> This is the Lobby... </p>
      {RoomCount.map((room) => (
        <Clicker RoomName={room.name} RoomNr={room.nr} />
      ))}  
    </div>
  );
}

export default App;

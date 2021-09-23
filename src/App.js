import './App.css';
import Clicker from './components/Clicker';

function App() {

  const Rooms = [
    { name: "Eins", Nummer: 1 },
    { name: "Zwei", Nummer: 2 },
    { name: "Drei", Nummer: 3 }
  ];

  return (
    <div className="App">
      <p> This is the Lobby... </p>
      {Rooms.map((rum) => (
        <Clicker name={rum.name} RaumNummer={rum.Nummer} />
      ))}  
    </div>
  );
}

export default App;

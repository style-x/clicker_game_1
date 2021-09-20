import './App.css';
import Clicker from './Clicker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          This is the Lobby...
        </p>
        <Clicker RaumNummer="1"/>
        <Clicker RaumNummer="2"/>
        <Clicker RaumNummer="3"/>
        </header>
    </div>
  );
}

export default App;

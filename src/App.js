import logo from "./logo.svg";
import "./App.css";
import Card from "./compnents/Cards/CenteredCard";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card name="Francisco" idade="8" />
        <Card name="João" idade="3" />
        <Card name="Marcelo" idade="5" />
      </header>
    </div>
  );
}

export default App;

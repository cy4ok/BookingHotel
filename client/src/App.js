import logo from "./logo.svg";
import "./App.css";
import CorpOffer from "./component/CorpOffer/CorpOffer"
// This one import will make Tailwind’s utility classes available to the entire app,
// no need to import it again elsewhere.
import "./tailwind.output.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="border-solid border-4 border-gray-600">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CorpOffer/>
    </div>
  );
}

export default App;

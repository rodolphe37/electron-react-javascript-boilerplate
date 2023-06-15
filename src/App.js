import logo from "./logo.svg";
import "./App.css";

const versions = window.versions;

function App() {
  const func = async () => {
    const response = await window.versions.ping();
    console.log(response); // Affichera 'pong'
  };

  func();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p
          style={{ fontSize: "1rem", maxWidth: 400 }}
          id="info"
        >{`This application use Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`}</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <p>Learn</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          &
          <a
            className="App-link"
            href="https://www.electronjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Electron
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const versions = window.versions;

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const func = async () => {
    const response = await versions.ping();
    console.log("ping", response); // Displays 'pong'.
  };

  useEffect(() => {
    setIsLoading(true);
    if (isLoading) {
      func();
    }

    return () => setIsLoading(false);
  }, [isLoading]);

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
            gap: "6px",
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

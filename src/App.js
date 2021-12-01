import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <main>
        <Dictionary defaultKeyword="chakra" />
      </main>
      <footer className="App-footer">
        This project was coded by{" "}
        <a
          href="https://www.linkedin.com/in/argielyn-lapid-997565b5/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Argielyn Lapid
        </a>
        , open-sourced on{" "}
        <a
          href="https://github.com/jihcoding/dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        and hosted on{" "}
        <a
          href="https://focused-ramanujan-770e5f.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Netlify
        </a>
      </footer>
    </div>
  );
}

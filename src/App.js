import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from "./components/Main";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  );
}

export default App;

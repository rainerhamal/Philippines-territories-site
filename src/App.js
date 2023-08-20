import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from "./components/Main";
import {BrowserRouter,  Routes, Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      {/* <Header/>
      <Main/> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './compoments/home/Home';
import Instructions from './compoments/inctructions/Instructions';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Instructions />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;

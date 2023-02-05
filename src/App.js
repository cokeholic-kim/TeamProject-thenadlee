import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './pages/Main';
import LogIn from './loginmodule/LogIn';
import Map from './mappage/Map.js';
import JoinPage from './loginmodule/JoinPage';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path ="/login" element={<LogIn/>}/>
          <Route path="/map/:places" element={<Map/>}/>
          <Route path="/join" element={<JoinPage/>}/>
        </Routes>
    </div>
  );
}

export default App;

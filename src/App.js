import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import CreateSchedule from './pages/CreateSchedule';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/create" element={<CreateSchedule/>}/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Comparative from './componets/comparative/Comparative';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Comparative/> } />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import './App.css';


import Tampil from './component/Tampil';
import Header from './component/Header';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Tampil />}/>
          <Route path='/detail/:id' element={<Header />}/>
        </Routes>
    </Router>

    </div>
  );
}

export default App;

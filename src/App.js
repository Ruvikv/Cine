import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header.jsx';
import Home from './pages/home.jsx';


import './pages/carrousel2/carrousel2.css';
import './pages/carrousel1/carrousel1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Pelicula from './components/pelicula/pelicula.jsx';
import Compra from './components/compra/compra.jsx';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path='/pelicula' element={<Pelicula />} />
        <Route exact path='/compra' element={<Compra />} />
      </Routes>
    </Router>
  );
}

export default App;

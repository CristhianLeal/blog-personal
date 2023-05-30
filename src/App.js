import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Mypages from './pages/Mypages/Mypages';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route exact path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/mypages' element={ <Mypages /> } />
    </Routes>
    <Footer />
    </>

  );
}

export default App;

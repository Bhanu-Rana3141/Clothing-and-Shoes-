import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Shoes from './components/Shoes';
import Clothing from './components/Clothing';
import Footer from './components/Footer';

function App() {
  return(
    <>
      <Navbar/>
      <Shoes/>
      <Clothing/>
      <Footer/>
    </>
  );
}

export default App;

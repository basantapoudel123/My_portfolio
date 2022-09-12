import './App.css';
import Intro from './components/Intro';
import About from './components/about/About';
import ProductList from './components/productList/ProductList';
import Contact from './contact/Contact';
import Toggle from './toggle/Toggle';
import { useContext} from 'react';
import { ThemeContext } from './context';
import Navbar from './components/navbar/Navbar';


function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white",
                 color: darkMode && "white"
                }}> 
        <Navbar />
        <Toggle />
        <Intro />
        <About />
        <ProductList />
        <Contact />
    </div>
  );
}

export default App;

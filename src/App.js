import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Intro from "./components/Intro";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import Contact from "./contact/Contact";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Navbar />
      <Intro />
      <ToastContainer />
      <About />
      <Experience />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;

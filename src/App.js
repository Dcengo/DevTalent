import './App.css';
import Header from "./compoments/header/Header";
import Techs from "./compoments/techs/Techs";
import Referances from "./compoments/referances/Referances";
import Info from "./compoments/info/Info";
import Tables from "./compoments/Experience/Tables.js";
import Portfolio from "./compoments/portfolio/Portfolio";
import Blog from "./compoments/blog/Blog";
import Footer from "./compoments/footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Info/>
        <Techs/>
        <Tables/>
        <Portfolio/>
        <Blog/>
        <Referances/>
        <Footer/>
    </div>
  );
}

export default App;

import "./index.css";
import negociologo from "./../src/assets/gorillazlogo.png";
import profileimg from "./../src/assets/marco.png";
import plasticlogo from "./../src/assets/logos/nulogo3.png";

//<Header imagenlogo={negociologo} imagenprofile={profileimg} />

import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <Herosection imagenlogo={plasticlogo} />
      </div>
      <div></div>
      <div>
        <Products />
      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <Footer imagenlogo={plasticlogo} />
      </div>
    </>
  );
}

export default App;

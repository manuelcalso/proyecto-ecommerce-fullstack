import "./index.css";
import plasticlogo from "./../src/assets/logos/nulogo3.png";

//<Header imagenlogo={negociologo} imagenprofile={profileimg} />

import Herosection from "./components/Herosection";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <div>
        <Herosection
          imagenlogo={
            "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700674111/products%20ecommerce/logos/nulogo3_waqxqh.png"
          }
        />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Products />
      </div>
      <div>
        <Newsletter />
      </div>
      <div>
        <Footer
          imagenlogo={
            "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700674111/products%20ecommerce/logos/nulogo3_waqxqh.png"
          }
        />
      </div>
    </>
  );
}

export default App;

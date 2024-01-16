import "./index.css";

//<Header imagenlogo={negociologo} imagenprofile={profileimg} />

import Herosection from "./components/Herosection";
import Newsletter from "./components/Newsletter";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Banner from "./components/Banner";

function Home() {
  return (
    <>
      <div>
        <Herosection
          imagenlogo={
            "https://res.cloudinary.com/dgzghl0ur/image/upload/v1705375915/products%20ecommerce/workana/beach_1_-_copia_eknxnl.png"
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
            "https://res.cloudinary.com/dgzghl0ur/image/upload/v1705375915/products%20ecommerce/workana/beach_1_-_copia_eknxnl.png"
          }
        />
      </div>
    </>
  );
}

export default Home;

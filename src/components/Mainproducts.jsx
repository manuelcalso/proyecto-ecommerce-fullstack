import "./../index.css";
import React from "react";
import Header from "./Header";
import Catalog from "./Catalog";
import Footer from "./Footer";

import profileimg from "./../assets/marco.png";

export default function Mainproducts() {
  return (
    <>
      <div>
        <Header
          imagennegocio={
            "https://res.cloudinary.com/dgzghl0ur/image/upload/v1700674111/products%20ecommerce/logos/nulogo3_waqxqh.png"
          }
          imagenprofile={profileimg}
        />
      </div>
      <div>
        <Catalog />
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

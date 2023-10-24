import React from "react";
import Header from "./Header";
import Catalog from "./Catalog";
import Footer from "./Footer";

import negociologo from "./../assets/logos/nulogo3.png";
import profileimg from "./../assets/marco.png";

export default function Mainproducts() {
  return (
    <>
      <div>
        <Header imagennegocio={negociologo} imagenprofile={profileimg} />
      </div>
      <div>
        <Catalog />
      </div>
      <div>
        <Footer imagenlogo={negociologo} />
      </div>
    </>
  );
}

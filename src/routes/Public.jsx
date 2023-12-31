// ./src/routes/Public.jsx
// Este archivo nos servirá para confirmar si el usuario está autenticado o no y usar la información como complemento al usuario.

import { useContext, useEffect, useState } from "react";
import UserContext from "../context/User/UserContext";
import { Dna } from "react-loader-spinner";

// eslint-disable-next-line react/prop-types
const PublicRoute = ({ component: Component }) => {
  const [isLoading, setIsLoading] = useState(true);

  // 1. OBTENER LOS DATOS DE USUARIO
  // SABER SI EL USUARIO ESTÁ AUTENTICADO O NO, CON AUTHSTATUS
  const userCtx = useContext(UserContext);
  const { authStatus, verifyingToken } = userCtx;

  // 2. HOOK DE EFECTO
  // VERIFICARÁ DE INICIO Y CUANDO HAYA UN CAMBIO EN AUTHSTATUS SI EL USUARIO TUVO MODIFICACIONES EN SU SESIÓN, Y SI SÍ, EJECUTARÁ EL VERIFYINGT TOKEN
  useEffect(() => {
    const verifyToken = async () => {
      await verifyingToken();

      setIsLoading(false);
    };

    verifyToken();
  }, [authStatus]);

  //console.log(isLoading);
  // 3. GENERACIÓN DE COMPONENTE
  return (
    <>
      {isLoading ? (
        <div className="flex flex-row justify-center items-center">
          <Dna
            visible={true}
            height="280"
            width="280"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <Component />
      )}
    </>
  );
};

export default PublicRoute;

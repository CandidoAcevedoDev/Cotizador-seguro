import { createContext, useState } from "react";
const CotizadorContext = createContext();

import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers";

const CotizadorProvider = ({ children }) => {
  const [data, setData] = useState({
    version: "",
    year: "",
    plan: "",
  });

  const [error, setError] = useState("");
  const [resultado, setResultado] = useState(0);
  const [cargando, setCargando] = useState(false);

  const handleChangeDatos = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    });
  };

  const cotizarSeguro = () => {
    //base
    let result = 2000;

    //Obtener diferencia de year
    const diferencia = parseInt(obtenerDiferenciaYear(data.year));

    //Restar el 3% por cada year de diferencia
    result -= (diferencia * 3 * result) / 100;

    // Calcular por marca
    result *= calcularMarca(data.version);

    // Calcular plan
    result *= calcularPlan(data.plan);

    result = formatearDinero(result);

    setCargando(true);

    setTimeout(() => {
      setResultado(result);
      setCargando(false);
    }, 3000);
  };

  return (
    <CotizadorContext.Provider
      value={{
        data,
        error,
        setError,
        handleChangeDatos,
        cotizarSeguro,
        resultado,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;

import { useCallback, useMemo, useRef } from "react";
import useCotizador from "../hooks/useCotizador";
import { VERSIONS, PLANS } from "../constants";

const Resultado = () => {
  const { resultado, data } = useCotizador();
  const { version, year, plan } = data;

  const yearRef = useRef(year);

  const [nameVersion] = useCallback(
    VERSIONS.filter((v) => v.id === Number(version)),
    [resultado]
  );
  const [namePlan] = useCallback(
    PLANS.filter((p) => p.id === Number(plan)),
    [resultado]
  );

  // * Ejemplo con useMemo

  // const [nameVersion] = useMemo(() =>
  //   VERSIONS.filter((v) => v.id === Number(version)),
  //   [resultado]
  // );
  // const [namePlan] = useMemo(() =>
  //   PLANS.filter((p) => p.id === Number(plan)),
  //   [resultado]
  // );

  if (resultado === 0) return null;

  return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nameVersion.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {namePlan.name}
      </p>

      <p className="my-2">
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>

      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotización: </span>
        {resultado}
      </p>
    </div>
  );
};

export default Resultado;

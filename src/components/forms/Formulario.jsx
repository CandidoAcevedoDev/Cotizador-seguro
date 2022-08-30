import { Fragment } from "react";
import { VERSIONS, YEARS, PLANS } from "../../constants";
import useCotizador from "../../hooks/useCotizador";
import Error from "../errors/Error";

const Formulario = () => {
  const { data, handleChangeDatos, setError, error, cotizarSeguro } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault()

    if(Object.values(data).includes('')){
      setError('ERROR: Todos los Campos son obligatorios');
      return
    }

    setError('')

    //TODO: COTIZAR
    cotizarSeguro();
    
  }

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label
            htmlFor="version"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Versión
          </label>
          <select
            name="version"
            id="version"
            className="w-full p-3 bg-white border border-gray-200"
            value={data.version}
            onChange={(ev) => handleChangeDatos(ev)}
          >
            <option>--- Selecciona una Versión ---</option>
            {VERSIONS.map((version) => (
              <option key={version.id} value={version.id}>
                {version.name}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor="year"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Año
          </label>
          <select
            name="year"
            id="year"
            className="w-full p-3 bg-white border border-gray-200"
            value={data.year}
            onChange={(ev) => handleChangeDatos(ev)}
          >
            <option>--- Selecciona un Año ---</option>
            {YEARS.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        <div className="my-5">
          <label
            htmlFor="plan"
            className="block mb-3 font-bold text-gray-400 uppercase"
          >
            Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANS.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.name}</label>
                <input
                  type="radio"
                  name="plan"
                  id="plan"
                  value={plan.id}
                  onChange={(ev) => handleChangeDatos(ev)}
                />
              </Fragment>
            ))}
          </div>
        </div>

        <input
          type="submit"
          value="Cotizar"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white cursor-pointer p-3 uppercase font-bold"
        />
      </form>
    </>
  );
};

export default Formulario;

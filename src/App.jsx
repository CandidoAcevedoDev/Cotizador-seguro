import { CotizadorProvider } from "./context/CotizadorProvider";
import AppSeguro from "./pages/AppSeguro";

function App() {
  return (
    <>
      <CotizadorProvider>
        <AppSeguro />
      </CotizadorProvider>
    </>
  );
}

export default App;

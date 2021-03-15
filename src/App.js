import "bootswatch/dist/litera/bootstrap.min.css";
import "./App.css";
// trae stripe y nos permite cargar la conexion con la plataforma
import { loadStripe } from "@stripe/stripe-js";
// Elements nos permite englobar a otros componentes para cada componente que contenga pueda tener acceso a la conexion de stripe
// useStripe nos retorna la conexion con stripe y useElements nos permite acceder a los elementos de stripe
import { Elements } from "@stripe/react-stripe-js";
import { Cards } from "./components/cards/Cards";

// recibe como parametro una llave publica , contraseña que da stripe y nos permite hacer la conexion con stripe
const stripePromise = loadStripe(
  "pk_test_51IV6wFD9svJa4NXzFHG11h8pjaRilG8g07wZSE73jx6fxnaMfWxmAdTWleDqrZ3CZxXg0q9C4niFJPMrGYFeszxF00gvt1Ykpe"
);

function App() {
  return (
    // pasamos por props la conexion que se heredara a todos los componentes hijos de element
    <Elements stripe={stripePromise}>
      <Cards />
    </Elements>
  );
}

export default App;

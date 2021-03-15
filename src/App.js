import "bootswatch/dist/litera/bootstrap.min.css";
import "./App.css";
// trae stripe y nos permite cargar la conexion con la plataforma
import { loadStripe } from "@stripe/stripe-js";
// Elements nos permite englobar a otros componentes para cada componente que contenga pueda tener acceso a la conexion de stripe
// useStripe nos retorna la conexion con stripe y useElements nos permite acceder a los elementos de stripe
import { Elements } from "@stripe/react-stripe-js";
import { CheckoutForm } from "./components/CheckoutForm";

// recibe como parametro una llave publica , contraseña que da stripe y nos permite hacer la conexion con stripe
const stripePromise = loadStripe(
  "pk_test_51IV6wFD9svJa4NXzFHG11h8pjaRilG8g07wZSE73jx6fxnaMfWxmAdTWleDqrZ3CZxXg0q9C4niFJPMrGYFeszxF00gvt1Ykpe"
);

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: 'https://fonts.googleapis.com/css?family=Roboto',
    },
  ],
};
const App = () => {
  return (
    <div className="AppWrapper">
      <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};

export default App;

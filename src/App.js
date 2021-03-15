import "bootswatch/dist/litera/bootstrap.min.css";
import axios from "axios";
import "./App.css";
// trae stripe y nos permite cargar la conexion con la plataforma
import { loadStripe } from "@stripe/stripe-js";
// Elements nos permite englobar a otros componentes para cada componente que contenga pueda tener acceso a la conexion de stripe
// useStripe nos retorna la conexion con stripe y useElements nos permite acceder a los elementos de stripe
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useState } from "react";

// recibe como parametro una llave publica , contraseña que da stripe y nos permite hacer la conexion con stripe
const stripePromise = loadStripe(
  "pk_test_51IV6wFD9svJa4NXzFHG11h8pjaRilG8g07wZSE73jx6fxnaMfWxmAdTWleDqrZ3CZxXg0q9C4niFJPMrGYFeszxF00gvt1Ykpe"
);

const CheckoutForm = () => {
  // nos retorna la conexion con stripe
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    setLoading(true);
    if (!error) {
      // se obtiene el id y toca registrarlo como un pago
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "https://fast-garden-07836.herokuapp.com/api/checkout",
          {
            id,
            amount: 10000,
          }
        );
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
      elements.getElement(CardElement).clear();
    }
  };
  return (
    <form onSubmit={handleFormSubmit} className="card card-body">
      {/* elemento que nos provee stripe para ingresar los datos de la tarjeta para testear la app   */}
      {/* tarjetas validasd en stripe test */}
      <img
        src="https://http2.mlstatic.com/D_NQ_NP_675797-MCO43236522635_082020-O.webp"
        alt="macbook-img"
        className="img-fluid"
      ></img>
      <h4 className="text-center my-2 ">Precio:$100.00 USD</h4>
      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      <button className="btn btn-success" disabled={!stripe}>
        {loading ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          "Comprar"
        )}
      </button>
    </form>
  );
};

function App() {
  return (
    // pasamos por props la conexion que se heredara a todos los componentes hijos de element
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}

export default App;

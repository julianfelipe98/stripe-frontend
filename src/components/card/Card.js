import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";
import "./Card.css";
export const Card = ({ title, img, amount }) => {
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
            amount,
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
    <form onSubmit={handleFormSubmit} className="card card-body my-4">
      {/* elemento que nos provee stripe para ingresar los datos de la tarjeta para testear la app   */}
      {/* tarjetas validasd en stripe test */}
      <h3 className="text-center">{title}</h3>
      <div className="img-container">
      <img src={img} alt="macbook-img" ></img>
      </div>
      <h4 className="text-center my-2 ">Precio:${amount} USD</h4>
      <div className="form-group">
        {/* <CardElement className="form-control" /> */}
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

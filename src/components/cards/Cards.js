import React from "react";
import { Card } from "../card/Card";

export const Cards = () => {
  const products = [
    {
      title: "Macbook Air",
      amount: "100",
      img:
        "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/1/9/190199129214_3__mba-pfopen-gold-es-es.tif-screen.jpg",
    },
    {
      title: "Hp Spectre",
      amount: "80",
      img:
        "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/p/n/png_hp_13-ap0001la_7.png",
    },
    {
      title: "Asus ZenBook",
      amount: "65",
      img:
        "https://media.aws.alkosto.com/media/catalog/product/cache/6/image/69ace863370f34bdf190e4e164b6e123/z/e/zenbook_14_ux434_product_photo_2b_royal_blue_brochure.png",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-md-4">
              <Card
                title={product.title}
                amount={product.amount}
                img={product.img}
                key={product.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

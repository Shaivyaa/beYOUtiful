import React, { useState } from "react";
import { Row } from "react-bootstrap";
import p1 from "../../assets/p1.png";
import p2 from "../../assets/p2.png";
import p3 from "../../assets/p3.png";
import p4 from "../../assets/p4.png";
import p5 from "../../assets/p5.png";
import p6 from "../../assets/p6.png";
import p7 from "../../assets/p7.png";
import p8 from "../../assets/p8.png"
import p9 from "../../assets/p9.png"
import p10 from "../../assets/p10.png"
import p11 from "../../assets/p11.png"
import p12 from "../../assets/p12.png"
import Card from "./Card";

function Products() {
  const [data, setData] = useState([
    {
      productimage: p1,
      producttitle: "RIBBED TANK",
      productprice: "$34.99",
    },
    {
      productimage: p2,
      producttitle: "CROSS BACK CROPPED CAMI",
      productprice: "$28.99",
    },
    {
      productimage: p3,
      producttitle: "THICK STRAP CROP TOP WITH BACK TIE",
      productprice: "$32.99",
    },
    {
      productimage: p4,
      producttitle: "OFF THE SHOULDER RUCHED LONG SLEEVE",
      productprice: "$36.99",
    },
    {
      productimage: p5,
      producttitle: "CROPPED MUSCLE TANK",
      productprice: "$25.99",
    },
    {
      productimage: p6,
      producttitle: "SATIN TIE BACK CROP TOP",
      productprice: "$44.99",
    },
    {
      productimage: p7,
      producttitle: "RIBBED LONG SLEEVE FRILL TOP",
      productprice: "$24.99",
    },
    {
      productimage: p8,
      producttitle: "HIGH LEG BODYSUIT WITH SIDE TIE",
      productprice: "$38.99",
    },
    {
      productimage: p9,
      producttitle: "RIBBED ONE SHOULDER LONG SLEEVE BODYSUIT",
      productprice: "$34.99",
    },
    {
      productimage: p10,
      producttitle: "HIGH LEG BODYSUIT WITH SIDE TIE",
      productprice: "$39.99",
    },
    {
      productimage: p11,
      producttitle: "HIGH LEG BODYSUIT WITH SIDE TIE",
      productprice: "$39.99",
    },
    {
      productimage: p12,
      producttitle: "STRAIGHT NECK BODYSUIT",
      productprice: "$24.99",
    }
  ]);

  return (
    <Row className="px-8 py-5">
      {data.length > 0 &&
        data.map((card, index) => (
          <Card
            key={index}
            productimage={card.productimage}
            producttitle={card.producttitle}
            productprice={card.productprice}
          />
        ))}
    </Row>
  );
}

export default Products;
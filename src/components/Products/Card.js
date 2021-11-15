import Button from "@restart/ui/esm/Button";
import React from "react";
import { Col, Row } from "react-bootstrap";

export default function Card({ productimage, producttitle, productprice }) {
  return (
    <>
   
    <Col  xs={6} sm={6} md={4} xl={2} className="card-custom py-5" >
    
        <div className="d-flex border-lightgray h-100 h-370">
          <img src={productimage} className="img-fluid cursor-pointer" alt=""/>
        </div>

        <div className="color-darkgray fw-normal pt-2">
          {producttitle}
        </div>
        <div className="color-gray">
          {productprice}
        </div>

    </Col>
    
    
    </>
  );
}

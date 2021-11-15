import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Imgone from '../../assets/img1.png'
import Imgtwo from '../../assets/img2.png'
import Imgthree from '../../assets/img3.png'

export default function Review() {
  return (
    <>
      <div
        className="bordertop-gray h-100 h-400"
        // style={{ borderBottom: " 2px solid red" }}
      >
        <div
          className="my-0 mx-auto h-100 h-400 w-100 w-700 pt-5"
          // style={{ border: "2px solid green" }}
        >
          <Container
            className="h-100 h-200 d-flex flex-column align-items-center my-0 mx-auto text-center"
            // style={{ border: "2px solid pink" }}
          >
            <p className="fs-5 fw-600 color-darkgray">MICHELLE B.</p>
            <p className="color-gray fst-italic lh-lg fs-5">
              "THIS IS MY VERY FIRST ORDER THROUGH SITE, AND I'M TOTALLY
              SATISFIED! THE FIT IS GREAT AND SO ARE THE PRICES. I'LL DEFINITELY
              RETURN AGAIN AGAIN..."
            </p>
          </Container>
      
          <Container
            className="h-100 h-200 d-flex flex-row align-items-center justify-content-between my-0 mx-auto text-center"
            // style={{ border: "2px solid black" }}
          >
            <div className="d-flex flex-row h-100 h-200"  
            // style={{ border: "2px solid yellow" }}
            >
              <div className="d-flex flex-column">
                <p>  ☆☆☆☆☆ </p>
                <img src={Imgone} className="h-100 h-250 cursor-pointer" />
              </div>
            </div>
            <div className="d-flex flex-row"  
            // style={{ border: "2px solid yellow" }}
            >
              <div className="d-flex flex-column">
                <p> ☆☆☆☆☆ </p>
                <img src={Imgtwo} className="h-100 h-250 cursor-pointer" />
              </div>
            </div>
            <div className="d-flex flex-row" 
            //  style={{ border: "2px solid yellow" }}
            >
              <div className="d-flex flex-column">
                <p> ☆☆☆☆☆ </p>
                <img src={Imgthree} className="h-100 h-250 cursor-pointer" />
              </div>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

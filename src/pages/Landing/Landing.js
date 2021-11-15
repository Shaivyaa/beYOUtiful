import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header/Header";
import Products from "../../components/Products/Products";
import Button from "@restart/ui/esm/Button";
import Review from "../../components/ReviewSection/Review";


export default function Landing() {
  return (
    <div>
      <Header />
      <Products />
      <div  className="text-center py-5 mb-5">
      <Button className="text-center border-0 py-2 px-3 font-white bg-red">VIEW ALL PRODUCTS</Button>
      </div>
      <Review />
    </div>
  );
}

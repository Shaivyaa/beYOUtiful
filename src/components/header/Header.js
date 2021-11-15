import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { DynamicUnderlinedText } from "../../styles/globalStyles";
import { HoverEffect } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import * as Routes from "../../routes/routes";

export default function Header() {
  return (
    <div>
      <div className="d-flex flex-row justify-content-end align-items-center h-55">
        <div className="d-flex flex-row justify-content-between w-100 w-830">
          <div className="title fst-italic fw-normal fs-3 cursor-pointer">
            BeYOÜtiful
          </div>
          <div className="nav-icons d-flex flex-row justify-content-evenly align-items-center w-100 w-280">
            <Link to={Routes.WISHLIST_PAGE} className="text-decoration-none">
              <HoverEffect className="topButton cursor-pointer color-gray">
                ♡ WISHLIST
              </HoverEffect>
            </Link>
            <Link to={Routes.ACCOUNT_PAGE} className="text-decoration-none">
              <HoverEffect className="cursor-pointer text-decoration-none color-gray">
                ACCOUNT
              </HoverEffect>
            </Link>
            <Link to={Routes.CART_PAGE} className="text-decoration-none">
              <HoverEffect className="topButton cursor-pointer text-decoration-none  color-gray">
                CART(0)
              </HoverEffect>
            </Link>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row justify-content-around align-items-center mt-3 w-100 w-700 my-0 mx-auto">
        <Link
          to={Routes.NEWIN_PAGE}
          className="text-decoration-none color-gray cursor-pointer"
        >
          <DynamicUnderlinedText className="text-decoration-none">
            NEW IN
          </DynamicUnderlinedText>
        </Link>
        <Link
          to={Routes.CLOTHING_PAGE}
          className="text-decoration-none color-gray cursor-pointer"
        >
          <DynamicUnderlinedText className="hover-effect text-decoration-none">
            CLOTHING
          </DynamicUnderlinedText>
        </Link>
        <Link
          to={Routes.BESTSELLER_PAGE}
          className="text-decoration-none color-gray cursor-pointer"
        >
          <DynamicUnderlinedText className="hover-effect text-decoration-none">
            BEST SELLERS
          </DynamicUnderlinedText>
        </Link>
        <Link
          to={Routes.AMBASSADOR_PAGE}
          className="text-decoration-none color-gray cursor-pointer"
        >
          <DynamicUnderlinedText className="hover-effect text-decoration-none">
            AMBASSADORS
          </DynamicUnderlinedText>
        </Link>
      </div>
    </div>
  );
}

import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "../routes/routes";

export default function Navigation() {
  const Landing = lazy(() => import("../pages/Landing/Landing"));
  const Account = lazy(() => import("../pages/Account/Account"));
  const NotFound = lazy(() => import("../pages/NotFound/NotFound"));
  const NewIn = lazy(() => import("../pages/Newin/NewIn"));
  const Clothing = lazy(() => import("../pages/Clothing/Clothing"));
  const BestSeller = lazy(() => import("../pages/Bestseller/BestSeller"));
  const Ambassador = lazy(() => import("../pages/Ambassador/Ambassador"));
  const Wishlist = lazy(() => import("../pages/Wishlist/Wishlist"));
  const Cart = lazy(() => import("../pages/Cart/Cart"));

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route component={Landing} path={ROUTES.LANDING_PAGE} exact />
          <Route component={Account} path={ROUTES.ACCOUNT_PAGE} exact />
          <Route component={NewIn} path={ROUTES.NEWIN_PAGE} exact />
          <Route component={Clothing} path={ROUTES.CLOTHING_PAGE} exact />
          <Route component={BestSeller} path={ROUTES.BESTSELLER_PAGE} exact />
          <Route component={Ambassador} path={ROUTES.AMBASSADOR_PAGE} exact />
          <Route component={Wishlist} path={ROUTES.WISHLIST_PAGE} exact />
          <Route component={Cart} path={ROUTES.CART_PAGE} exact />


          {/* Not Found will be at last */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

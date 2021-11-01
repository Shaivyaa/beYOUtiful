import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as ROUTES from "../routes/routes";

export default function Navigation() {
  const Landing = lazy(() => import("../pages/Landing/Landing"));
  const Account = lazy(() => import("../pages/Account/Account"));
  const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route component={Landing} path={ROUTES.LANDING_PAGE} exact />
          <Route component={Account} path={ROUTES.ACCOUNT_PAGE} exact />

          {/* Not Found will be at last */}
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

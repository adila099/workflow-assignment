import React from "react";
import ReactDOM from "react-dom/client";
import Task from "views/Task";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "components/Auth/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap.scss";
import "./assets/css/demo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import AdminLayout from "layouts/Admin.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Switch>
      <Route path="/admin" render={(props) => <AdminLayout {...props} />} />

      <Route path="/login" component={Login} />
      <Route path="/task" component={Task} />
      {/* <Redirect from="/" to="/admin/dashboard" /> */}
      <Redirect from="/" to="/login" />
    </Switch>
  </BrowserRouter>
);

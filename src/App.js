import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import pageinfo from "./data/pageinfo";

function App() {
  const routeMaps = pageinfo.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));
  return (
    <div className="AppClass">
      <BrowserRouter>
        <Switch>
          {routeMaps}
          <Route></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import Home from "./components/Home";
import Resources from "./components/Resources";
import Sheet from "./components/Sheet";
import List from "./components/List";
import NotFound from "./components/NotFound";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route exact path="/sdesheet">
          <Sheet />
        </Route>
        <Route exact path="/sdesheet/:topic">
          <List />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";

import Home from "./pages/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
// API KEY
// AIzaSyBmpSCRuDL5SgiVD1cP3-CicmNgrxgMc8E
// custom-search google
// https://developers.google.com/custom-search/v1/using_rest

// create new hooks
// https://cse.google.com/cse/create/new

// Hosting
// Project Console: https://console.firebase.google.com/project/clone-1a1b5/overview
// Hosting URL: https://clone-1a1b5.web.app
function App() {
  return (
    <div className="App">
      {/* BEM */}
      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

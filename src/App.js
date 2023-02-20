import React from "react";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./containers/Header";
import ProductDetails from "./containers/ProductDetails";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div style={{ marginTop: "80px" }}>
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route
              path="/product/:productId"
              exact
              element={<ProductDetails />}
            />
            <Route>404 Not Found!!</Route>
            {/** this route is for 404**/}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;

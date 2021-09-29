import React from "react";
import Dapp from "./components/Dapp";
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/partials/NavBar";
import TestDapp from "./components/partials/DappHome";
import Footer from "./components/partials/Footer";
import "./styles/app.scss";

const App = () => {
  return (
    <div id="root" className="App">
      <Browser>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/app" component={Dapp} /> */}
          <Route path="/app" component={TestDapp} />
        </Switch>
        <Footer />
      </Browser>
    </div>
  );
};

export default App;

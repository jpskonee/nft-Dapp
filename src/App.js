import React from "react";
import Dapp from "./components/Dapp";
import { BrowserRouter as Browser, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import NavBar from "./components/partials/NavBar";
import TestDapp from "./components/partials/DappHome";
import RoadMapHome from "./components/RoadMapHome";
import Footer from "./components/partials/Footer";
import "./styles/app.scss";
import FooterNew from "./components/partials/FooterNew";
import ContactPage from "./components/partials/ContactPage";

const App = () => {
  return (
    <div id="root" className="App">
      <Browser>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          {/* <Route path="/app" component={Dapp} /> */}
          <Route path="/app" component={TestDapp} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/roadmap" component={RoadMapHome} />
        </Switch>
        <FooterNew />
        {/* <Footer /> */}
      </Browser>
    </div>
  );
};

export default App;

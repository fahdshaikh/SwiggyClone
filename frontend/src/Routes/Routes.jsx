import { Menu } from "@material-ui/core";
import React from "react";
import { Route, Switch } from "react-router-dom";
// import LandingPg from '../Components/LandingPage/LandingPg';
import Home from "../Components/RestautantPage/Home";
// import Restaurants from '../Components/Restaurants';
import { MenuPages } from "../Components/MenuPage/MenuPages";

export const Routes = () => {
  return (
    <>
      <Switch>
        {/* <Route path='/' exact render={() => <LandingPg />} /> */}
        {/* <Route path='/' render={() => <Home />} /> */}
        {/* <Route path='/Restaurants' render={() => <Home />} /> */}
        {/* <Route path='/Restaurants' render={() => <Restaurants />} /> */}
        <Route path="/" render={() => <MenuPages />} />
      </Switch>
    </>
  );
};

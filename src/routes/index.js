import { Switch, Route } from "react-router";
import Home from "../pages/Home";
import { useState } from "react";
import Register from "../pages/Register";

const Routes = () => {
  const [user, setUser] = useState({});

  return (
    <Switch>
      <Route exact path="/">
        <Register setUser={setUser}></Register>
      </Route>
      <Route path="/Home/:name">
        <Home user={user}></Home>
      </Route>
    </Switch>
  );
};
export default Routes;

import React, { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { LOGOUT, GET_WELCOME } from "../context/actions";
import NavBar from "./NavBar";
import HomePage from "../pages/HomePage";
import InputPage from "../pages/InputPage";
import ResourcesPage from "../pages/ResourcesPage";
import JournalPage from "../pages/JournalPage";
import ProgressPage from "../pages/ProgressPage";
import Detail from "../pages/Detail";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import BottomNav from "./BottomNav";

const AuthenticatedApp = () => {
  const [state, dispatch] = useGlobalContext();
  const getWelcome = async () => {
    const { data } = await axios.get("/api/welcome", {
      headers: {
        Authorization: `Bearer ${state.user.token}`,
      },
    });

    console.log(data);
    dispatch({
      type: GET_WELCOME,
      welcomeMessage: data,
    });
  };

  useEffect(() => {
    getWelcome();
  });
  const handleLogout = () => {
    localStorage.removeItem("authUser");
    console.log("Clicked!");
    dispatch({
      type: LOGOUT,
    });
  };

  return (
    <div>
      <Router>
        <NavBar handleLogout={handleLogout} />
        <Switch>
          <Route exact from="/" render={(props) => <HomePage {...props} />} />
          <Route
            exact
            path="/input"
            render={(props) => <InputPage {...props} />}
          />
          <Route
            exact
            path="/progress"
            render={(props) => <ProgressPage {...props} />}
          />
          <Route
            exact
            path="/resources"
            render={(props) => <ResourcesPage {...props} />}
          />
          <Route
            exact
            path="/journal"
            render={(props) => <JournalPage {...props} />}
          />
          <Route
            exact
            path="/api/:id"
            render={(props) => <Detail {...props} />}
          />
        </Switch>
        <BottomNav />
      </Router>
    </div>
  );
};

export default AuthenticatedApp;

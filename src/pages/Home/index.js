import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// styles
import Header from "../../components/Header";

// Pages
import Users from "../Users";
import Posts from "../Posts";
import Comments from "../Comments";

const Home = () => {
  return (
    <Router basename={"/project2-challenge"}>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Users />
        </Route>
        <Route path='/posts' exact>
          <Posts />
        </Route>
        <Route path='/comments' exact>
          <Comments />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;

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
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact>
          {/* load post data */}
          <Users />
        </Route>
        <Route path='/posts' exact>
          {/* load post data */}
          <Posts />
        </Route>
        <Route path='/comments' exact>
          {/* load comment data */}
          <Comments />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;

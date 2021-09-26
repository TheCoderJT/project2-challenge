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
        <Route path='/project2-challenge/' exact>
          {/* load post data */}
          <Users />
        </Route>
        <Route path='/project2-challenge/posts' exact>
          {/* load post data */}
          <Posts />
        </Route>
        <Route path='/project2-challenge/comments' exact>
          {/* load comment data */}
          <Comments />
        </Route>
      </Switch>
    </Router>
  );
};

export default Home;

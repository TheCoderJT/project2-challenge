import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// styles
import Header from "../../components/Header";

// Pages
import Users from "../Users";
import Posts from "../Posts";
import Comments from "../Comments";

//* I have no idea if this works, but you would think
//* it loads the home route on load...
const Home = () => {
  useEffect(() => {
    <Route path='/' exact>
      {/* load post data */}
      <Users />
    </Route>;
  }, []);

  return (
    <Router basename={"/project2-challenge"}>
      <Header />
      <Switch>
        <Route path='/' exact component={Users} />
        <Route path='/posts' exact component={Posts} />
        <Route path='/comments' exact component={Comments} />
      </Switch>
    </Router>
  );
};

export default Home;

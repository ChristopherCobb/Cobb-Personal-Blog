import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";
import Timeline from "./Timeline"
import Navbar from "./Navbar"
import NewBlog from "./NewBlog"
import Admin from "./Admin"
import OneBlog from "./OneBlog"



import "es6-promise";

const App: React.FC<IAppProps> = (props: IAppProps) => {
  return (
    <Router>
      <Navbar />
       
      <main className="container-fluid">
        <Switch>
          <Route exact path="/" component={Timeline}></Route>
          <Route exact path="/blogs/add" component={NewBlog}></Route>
          <Route exact path="/blogs/:id/details" component={OneBlog}></Route>
          <Route exact path="/blogs/:id/admin" component={Admin}></Route>
        </Switch>
      </main>
    </Router>
  );
};

interface AppProps {}

export interface IAppProps {}

export interface IAppState {
  blogs: Array<any>;
}

export default App;


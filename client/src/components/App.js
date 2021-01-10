import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import TodoCreate from "./todos/TodoCreate";
import TodoEdit from "./todos/TodoEdit";
import TodoList from "./todos/TodoList";
import TodoDelete from "./todos/TodoDelete";
import history from "../history";

import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={TodoList} />
            <Route path="/todos/new" exact component={TodoCreate} />
            <Route path="/todos/edit/:id" exact component={TodoEdit} />
            <Route path="/todos/delete/:id" exact component={TodoDelete} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;

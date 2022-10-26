import React from 'react';
import { Route } from 'react-router-dom';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Paginate from '../containers/Paginate';
import ShowTask from '../containers/ShowTask';

const App = () => (
  <div>
    <AddTodo />
    <Route exact path="/" component={VisibleTodoList} />
    <Route path="/page/:page" component={VisibleTodoList} />
    <Route path="/task/:id" component={ShowTask} />
    <Paginate />
    <Footer />
  </div>
);

export default App;

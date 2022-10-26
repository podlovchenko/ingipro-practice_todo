import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
  }
};

const mapStateToProps = (state, route) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter.filter),
    page: route.match.params.page || 1,
    filter: state.visibilityFilter.filter
  };
};

const mapDispatchToProps = (dispatch) => ({
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    },
    onShow: id => {
      dispatch(push(`/task/${id}/`));
    }
  });

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoList);

export default VisibleTodoList

import { connect } from 'react-redux';
import Paginator from '../components/Paginator';

const getAmountTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos.length / 3;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed).length / 3;
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed).length / 3;
  }
};

const mapStateToProps = (state) => {
  return ({
    amount: getAmountTodos(state.todos, state.visibilityFilter.filter),
  });
};

const Paginate = connect(mapStateToProps)(Paginator);

export default Paginate;

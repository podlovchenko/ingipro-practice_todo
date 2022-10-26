import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, page, onTodoClick, onShow, filter}) => {
  const pageTodos = todos.slice((page - 1) * 3, page * 3);
  console.log(filter);
  return (
    <div>
      <h2>
        {filter}
      </h2>
      <ul>
        {pageTodos.map(todo => (
          <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} show={() => onShow(todo.id)}/>
        ))}
      </ul>
      <h2>
        Всего {todos.length} задач
      </h2>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
};

export default TodoList;
import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({onClick, completed, text, id, show}) => (
  <div>
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
      }}
    >
      {text}
    </li>
    <button
      onClick={(id) => show(id)}>
      {'Показать'}
    </button>
  </div>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;

import React from 'react';

const Task = ({task, onClick}) => {
  return (
    <div>
      <h2>
        {task.id}
      </h2>
      <h2>
        {task.text}
      </h2>
      <h2>
        {task.completed ? 'complete' : ''}
      </h2>
      <button
        onClick={() => onClick()}
      >
        {'Back'}
      </button>
    </div>
  );
};

export default Task;

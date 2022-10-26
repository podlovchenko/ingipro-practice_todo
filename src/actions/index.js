let nextTodoId = JSON.parse(localStorage.getItem('nextTodoId')) ? JSON.parse(localStorage.getItem('nextTodoId')) : 0;

export const addTodo = (text) => {
  nextTodoId++;

  localStorage.setItem('nextTodoId', JSON.stringify(nextTodoId));

  return {
    type: 'ADD_TODO',
    id: nextTodoId,
    text,
  };
};

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter,
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id,
});

export const setPage = page => ({
  type: 'SET_PAGE',
  page,
});

function updateLocalStorage(state) {
  localStorage.setItem('todos', JSON.stringify(state));
}

const initialState = JSON.parse(localStorage.getItem('todos')) ? JSON.parse(localStorage.getItem('todos')) : [];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const newStateAdd = [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false,
        },
      ];

      updateLocalStorage(newStateAdd);

      return newStateAdd;
    case 'TOGGLE_TODO':
      const newStateToggle = state.map(todo =>
        ((todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo),
      );

      updateLocalStorage(newStateToggle);

      return newStateToggle;
    default:
      return state;
  }
};

export default todos;

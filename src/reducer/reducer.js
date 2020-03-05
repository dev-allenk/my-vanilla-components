const addTodo = (state, { id, content }) => {
  return [...state, { id, content }];
};

const deleteTodo = (state, { id }) => {
  return state.filter(item => item.id !== id);
};

const reducer = (state, { type, payload }) =>
  ({
    addTodo,
    deleteTodo
  }[type](state, payload));

export default reducer;

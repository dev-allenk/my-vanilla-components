export const addTodo = (state, { id, content }) => {
  return [...state, { id, content }];
};

export const deleteTodo = (state, { id }) => {
  return state.filter(item => item.id !== id);
};

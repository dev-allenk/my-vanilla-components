const addTodo = (state, { id, content }) => {
  return [...state, { id, content }];
};

const reducer = (state, { type, payload }) =>
  ({
    addTodo
  }[type](state, payload));

export default reducer;

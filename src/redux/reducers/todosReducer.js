import * as actionsType from "../actions/type";

export const todosReducers = (state = [], action) => {
  switch (action.type) {
    case actionsType.ADDNEW_TODO:
      return [action.payload, ...state];
    case actionsType.GETALL_TODO:
      return action.payload;
    case actionsType.TOGGLE_TODO:
      return state.map((todo) =>
        todo._id === action.payload._id ? { ...todo, done: todo.done } : todo
      );

    default:
      return state;
  }
};

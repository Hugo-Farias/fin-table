// Define action types as constants
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

//TODO Add boilerplate react-redux toolkit

// Define TypeScript types for the actions
export interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: string;
}

export interface ToggleTodoAction {
  type: typeof TOGGLE_TODO;
  payload: number;
}

// Create action creators
export const main = (text: string): AddTodoAction => ({
  type: ADD_TODO,
  payload: text,
});

export const toggleTodo = (id: number): ToggleTodoAction => ({
  type: TOGGLE_TODO,
  payload: id,
});

export type TodoAction = AddTodoAction | ToggleTodoAction;

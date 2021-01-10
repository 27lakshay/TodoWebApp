import todos from "../apis/todos";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_TODO,
  FETCH_TODOS,
  FETCH_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from "./types";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createTodo = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await todos.post("/apis/v1/", { ...formValues, userId });

  dispatch({ type: CREATE_TODO, payload: response.data });
  history.push("/");
};

export const fetchTodos = () => async (dispatch) => {
  const response = await todos.get("/apis/v1/");
  dispatch({ type: FETCH_TODOS, payload: response.data });
};

export const fetchTodo = (id) => async (dispatch) => {
  const response = await todos.get(`/apis/v1/${id}/`);

  dispatch({ type: FETCH_TODO, payload: response.data });
};

export const editTodo = (id, formValues) => async (dispatch) => {
  const response = await todos.patch(`/apis/v1/${id}/`, formValues);

  dispatch({ type: EDIT_TODO, payload: response.data });
  history.push("/");
};

export const deleteTodo = (id) => async (dispatch) => {
  await todos.delete(`/apis/v1/${id}/`);

  dispatch({ type: DELETE_TODO, payload: id });
  history.push("/");
};

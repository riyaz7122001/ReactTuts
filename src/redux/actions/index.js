import axios from "axios";
import { api } from "../../components/Header/constants/constants";
import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO } from "./type";

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${api}/todo/addTodo`, {
      data,
    });
    dispatch({ type: ADDNEW_TODO, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getAllTodo = () => async (dispatch) => {
  try {
    const response = await axios.get(`${api}/todo/getTodo`);
    dispatch({ type: GETALL_TODO, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${api}/todo/getTodo/${id}`);
    dispatch({ type: TOGGLE_TODO, payload: response.data });
  } catch (error) {
    console.log(error.message);
  }
};

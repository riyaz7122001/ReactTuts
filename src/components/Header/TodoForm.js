import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../../redux/actions";
import { api } from "./constants/constants";
import axios from "axios";

const TodoForm = () => {
  const [data, setData] = useState("");
  // const [isUpdating, setIsUpdating] = useState(false);
  const dispatch = useDispatch();

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const result = await axios.post(`${api}/todo/addTodo`, { data });
    console.log(result.data.todo);
    setData("");
    window.location.reload();
  };

  // const handleAddTodo = (e) => {
  //   e.preventDefault();
  //   dispatch(addNewTodo());
  //   // after dispatch reset the text fieild
  //   setTodo("");
  // };
  return (
    <>
      <form className="form" onSubmit={handleAddTodo}>
        <input
          type="text"
          placeholder="Enter Your Todo..."
          className="input"
          autoCapitalize="false"
          autoComplete="false"
          autoCorrect="false"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button className="add" onClick={handleAddTodo}>
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;

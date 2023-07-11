import React, { useState, useEffect } from "react";
import { api } from "./constants/constants";
import { toggleTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import axios from "axios";

const Todo = () => {
  const [data, setData] = useState([]);

  const handleDelete = async (_id) => {
    await axios.delete(`${api}/todo/deleteTodo/${_id}`);
    // console.log("deleted!");((
    let dataCopy = [...data];
    let updatedData = dataCopy.filter((item) => item._id !== _id);
    console.log(updatedData);

    setData(updatedData);
  };
  const handleUpdate = () => {
    setEditing(true);
  };
  const [editing, setEditing] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${api}/todo/getTodo`)
      .then((res) => {
        setData(res.data.todos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {data &&
        data.length > 0 &&
        data.map((todo) => {
          return (
            <>
              <div className="container" key={todo._id}>
                <span style={{ display: editing ? "none" : "block" }}>
                  {todo.data}
                </span>
                <form
                  action=""
                  style={{ display: editing ? "inline" : "none" }}
                >
                  <input
                    type="text "
                    value={todo.data}
                    onChange={(e) => setData(e.target.value)}
                  />
                </form>
                <span className="icon">
                  <i
                    className="fas fa-trash"
                    onClick={() => handleDelete(todo._id)}
                  />
                </span>
                <span className="icon">
                  <i
                    className="fas fa-pen"
                    onClick={() => setEditing((prevState) => !prevState)}
                  />
                </span>
              </div>
            </>
          );
        })}
    </>
  );
};

export default Todo;

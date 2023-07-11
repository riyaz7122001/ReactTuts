import React, { useEffect } from "react";
import { getAllTodo } from "../../redux/actions";
import { useDispatch } from "react-redux";
import Todo from "./Todo";

const Todos = () => {
  const dispatch = useDispatch();
  //   const todosData = useSelector((state) => state.todos);
  //   console.log(todosData);
  //   const todosResponse = [...todosData];
  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  return (
    <article>
      <ul>
        <Todo />
      </ul>
    </article>
  );
};

export default Todos;

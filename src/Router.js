import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import TodoForm from "./components/Header/TodoForm";
import Todos from "./components/Header/Todos";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <TodoForm />
                <Todos />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;

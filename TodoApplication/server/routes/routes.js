const router = require("express").Router();
const {
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/addTodo");

router.post("/addTodo", addTodo);
router.get("/getTodo", getTodo);
router.put("/updateTodo", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;

const todo = require("../models/todoSchema");

exports.addTodo = async (req, res) => {
  const { data } = req.body;
  if (!data) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide data!" });
  }
  try {
    const newTodo = await todo.create({
      data,
    });

    await newTodo.save();
    return res.status(200).json({
      success: true,
      message: "Todo Added Successfully!",
      todo: newTodo,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todos = await todo.find({}).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, todos: todos });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  const { _id, data } = req.body;
  try {
    const todos = await todo.findByIdAndUpdate(_id, { data });
    return res
      .status(200)
      .json({ success: true, message: "Updated Successfully!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  // const { _id } = req.body;
  try {
    // await todo.findByIdAndDelete(_id);
    const id = req.params.id;
    console.log(id, "yahi id hai");
    await todo.findByIdAndDelete(id);

    return res
      .status(200)
      .json({ success: true, message: "Deleted Successfully!" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

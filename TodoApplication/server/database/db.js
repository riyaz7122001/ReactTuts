const mongoose = require("mongoose");

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    if (conn) console.log(`Connected to MongoDB`);
    if (!conn) console.log(`MongoDB Disconnected`);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connection;

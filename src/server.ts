import mongoose from "mongoose";
import app from "./app";

const port = 5000;

//Database Connection (Mongoose)
const bootstrap = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    console.log(`Database Connection Estublished`);

    app.listen(port, () => {
      console.log(`Mongoose-Master listening on port ${port}`);
    });
  } catch (error) {
    console.log(`Failed To Connect`, error);
  }
};

bootstrap();

import express, { Application } from "express";
import cors from "cors";
import { Schema, model } from "mongoose";

const app: Application = express();

//Application Routes
import userRoutes from "./app/modules/user/user.route";

//Middlewares (app.use)
//Using CORS
app.use(cors());
//Parse Data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRoutes);

export default app;

//Inserting a test data into mongodb
/*
      Step1: Interface (Done)
      Step2: Schema (Done)
      Step3: Model (Done)
      Step4: Database Query On Model (Done)
*/

//Patern MVC, Modular

/*
Interface => interface.ts
Schema, Model => model.ts

route
route function => controller.ts
Database Query Function => service
*/

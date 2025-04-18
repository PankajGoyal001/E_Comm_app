import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sequelize from "./src/Database/UserDatabase.js";
import "./src/Models/UserModel.js"
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log("PORT IS", PORT);
});

async function connect() {
  try {
  await  sequelize.authenticate();
    console.log("database is connect ");
   await sequelize.sync({ alter: true });
    console.log("data sync");
  } catch (error) {
    console.error("default", error);
  }
}
connect()


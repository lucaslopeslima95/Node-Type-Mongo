import express from "express";
import mongoose from "mongoose";
import routes from "./Routes/routes";

const app = express();

mongoose.set("strictQuery", true);
mongoose.connect('mongodb://localhost/firstapi');//endereço de onde o mongo esta rodando

app.use(express.json());

app.use(routes);

app.listen(3333, ()=> {
    console.log("Server Listen");
})

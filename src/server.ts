import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose.connect('mongodb://localhost/firstsapi');//endereço de onde o mongo esta rodando

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("primeiro teste")
});

app.listen(3333, ()=> {

})
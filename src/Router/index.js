import express from "express";
import todoRouter from "./todos.Router.js";

let router=express.Router();

router.use("/todos", todoRouter);

export default router;





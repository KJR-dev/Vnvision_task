import express from "express";
import { todoCreateValidation, todoGetDeleteValidation, todoUpdateValidation, todoGetAllValidation } from "../Middleware/todos.Validation.js";
import { createTodo, getByIdTodo, getAllTodo, deleteTodo, updateTodo } from "../Controller/todos.Controller.js";

const todoRouter = express.Router();

todoRouter.route("/")
    .post(todoCreateValidation, createTodo)
    .get(todoGetAllValidation, getAllTodo);

todoRouter.route("/:todosId")
    .get(todoGetDeleteValidation, getByIdTodo)
    .patch(todoUpdateValidation, updateTodo)
    .delete(todoGetDeleteValidation, deleteTodo);

export default todoRouter;

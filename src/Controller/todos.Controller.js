import wrapAsync from "../Util/wrapAsync.js";
import { response } from "../Util/response.js";
import { todoCreateService, todoGetByIdService, todoGetAllService, todoUpdateService, todoDeleteService } from "../Service/todos.Service.js";

export const createTodo = wrapAsync(async (req, res, next) => {
    const { todo } = req.body;
    const todoData = await todoCreateService(todo);
    return response(res, 201, false, "Todo create successfully", { data: todoData })
})

export const getByIdTodo = wrapAsync(async (req, res, next) => {
    const todoData = await todoGetByIdService(req.params.todosId);
    if (!todoData) {
        return response(res, 404, true, "Todo not found")
    }
    return response(res, 200, false, "Todo get successfully", { todoData })
})

export const getAllTodo = wrapAsync(async (req, res, next) => {
    const todoData = await todoGetAllService(req.query.status);
    if (!todoData.length) {
        return response(res, 404, false, "No todos found");
    }
    return response(res, 200, false, "Todo get all successfully", { todoData })
})

export const updateTodo = wrapAsync(async (req, res, next) => {
    const { todosId } = req.params;
    const { status } = req.body.todo;
    const todoData = await todoUpdateService(todosId, status);
    if (!todoData[0]) {
        return response(res, 404, false, "Todo not exist")
    }
    return response(res, 200, false, "Todo update successfully", todoData[0])
})

export const deleteTodo = wrapAsync(async (req, res, next) => {
    const todoData = await todoDeleteService(req.params.todosId);
    if (!todoData) {
        return response(res, 404, false, "Todo not exist")
    }
    return response(res, 204, false, "Todo delete successfully")
})


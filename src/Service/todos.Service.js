import ExpressError from "../Util/ExpressError.js";
import db from '../models/index.js';

export const todoCreateService = async (todo) => {
    try {
        const todoData = await db.todos.create({
            todo_name: todo.todoName,
            status: todo.status
        });
        return todoData;
    } catch (error) {
        throw new ExpressError(400, true, "DB create todo service", error.original?.sqlMessage || "Failed to create todo");
    }
};


export const todoGetByIdService = async (todoId) => {
    try {
        const todoData = await db.todos.findByPk(todoId);
        return todoData;
    } catch (error) {
        throw new ExpressError(400, true, "DB get todo by id service", error.original.sqlMessage || "Failed to get todo by id todo");
    }
};

export const todoGetAllService = async (status) => {
    try {
        let todoData = null;
        let whereCondition = {};
        if (status) {
            whereCondition.status = status.toLowerCase() === 'completed';
        }
        if (whereCondition) {
            todoData = await db.todos.findAll({
                where: whereCondition,
            });
        } else {
            todoData = await db.todos.findAll();
        }
        return todoData;
    } catch (error) {
        throw new ExpressError(400, true, "DB get all todo service", error.original.sqlMessage || "Failed to get all todo");
    }
};

export const todoUpdateService = async (todosId, status) => {
    try {
        const todoData = await db.todos.update(
            { status: status },
            {
                where: {
                    id: todosId,
                },
            },
        );
        return todoData;
    } catch (error) {
        throw new ExpressError(400, true, "DB update todo service", error.original.sqlMessage || "Failed to update todo");
    }
};

export const todoDeleteService = async (todoId) => {
    try {
        const todoData = await db.todos.destroy({
            where: {
                id: todoId,
            }
        });
        return todoData;
    } catch (error) {
        throw new ExpressError(400, true, "DB delete todo service", error.original.sqlMessage || "Failed to delete todo");
    }
};
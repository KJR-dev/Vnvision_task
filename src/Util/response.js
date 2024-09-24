export const response = function (res, status, error, message, data = null) {
    return res.status(status).json({
        status: status,
        error: error,
        message: message,
        data: data,
    });
};

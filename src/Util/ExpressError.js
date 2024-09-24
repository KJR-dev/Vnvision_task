class ExpressError extends Error {
    constructor(statusCode, error, from, message) {
        super(message);
        this.statusCode = statusCode;
        this.error = error;
        this.from = from;
        this.message = message;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    } 
}

export default ExpressError;
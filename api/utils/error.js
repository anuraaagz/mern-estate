export const errorHandler = (statusCode, message)=>
{
    const error = new Error();
    error.statusConde = statusCode;
    error.message = message;
    return error;
}
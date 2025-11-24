/**
 * Standard success response
 * @param {Response} res Express response object
 * @param {number} statusCode HTTP status code
 * @param {string} message Success message
 * @param {any} data Data to return
 */
const successResponse = (res, statusCode, message, data = null) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};

// /**
//  * Standard error response
//  * @param {Response} res Express response object
//  * @param {number} statusCode HTTP status code
//  * @param {string} message Error message
//  * @param {any} error Detailed error object (optional)
//  */
// const errorResponse = (res, statusCode, message, error = null) => {
//     const response = {
//         success: false,
//         message,
//     };

//     if (error !== null && process.env.NODE_ENV !== 'production') {
//         response.error = error;
//     }

//     return res.status(statusCode).json(response);
// };

export {
    successResponse,
    // errorResponse,
};

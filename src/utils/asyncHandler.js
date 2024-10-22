const asyncHandler = (requestHandler) => {
    (req, res, next) => {
       Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



// const asyncHandler = (fn) => async (err, req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code  || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

//this is higher order function, it accepts function in parameter as varaible, it seems very difficult but it is very easy it is function in function like (fn) => { async (req, res, next) => {}} , inner function  is for async await
//it is wrapper function we can pass function for try-catch and async await like ......... asyncHandler(userLogin);

// export { Connect }
export { asyncHandler }
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
const errorHandler = (error, _request, response, next) => {
    console.error(error.message);

    if (error.name === "Error") {
        return response.status(400).send({ error: error.message });
    }
    else if(error.name === "ValidationError") {
        return response.status(400).send({ error: error.message });
    }

    next(error);
};

export default errorHandler;
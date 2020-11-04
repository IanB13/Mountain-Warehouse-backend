import express from 'express';

const requestLogging = (request: express.Request, _response: express.Response, next: express.NextFunction): void => {
    console.log("Method:", request.method);
    console.log("Path:  ", request.path);
    console.log("Body:  ", request.body);
    console.log("---");
    next();
};

export default requestLogging;
import express from 'express';

const unknownEndpoint = (_request: express.Request, response: express.Response):void => {
    response.status(404).send({ error: "unknown endpoint" });
};

export default unknownEndpoint;
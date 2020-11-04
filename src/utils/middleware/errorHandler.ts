import express from 'express';
import {HttpException} from '../../types/types';

const errorHandler = (
    error: HttpException ,
    _request: express.Request, 
    response: express.Response, 
    next: express.NextFunction
): void => {
  console.log("IN ERROR HANDLER DAIUDHWUAID");
    const status = error.status || 500;
    const message = error.message || 'Something went wrong';
    response
    .status(status)
    .send({
      status,
      message,
    });
    next(error);
};

export default errorHandler;
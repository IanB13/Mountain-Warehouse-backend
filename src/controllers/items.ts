import express from 'express';
import Item from '../models/Item';

const itemRouter = express.Router();

itemRouter.post('/',  async (request, response) => {
    await Item.create(request.body);
    response.status(200).json(request.body);
});

export default itemRouter;
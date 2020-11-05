import express from 'express';
import Item from '../models/Item';

const itemRouter = express.Router();

itemRouter.post('/',  async (request, response) => {
    await Item.create(request.body);
    response.status(200).send(request.body);
});

itemRouter.get('/', async (request, response) => {
    console.log(request.query);
    const tags = request.query.tags;
    if(tags){
        const items = await Item.find( { "tags": { "$in": ["Cold"] } });
        response.status(200).json(items);
    }
    else{
        console.log("tags must be specified");
    }
});

export default itemRouter;
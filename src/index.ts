import express from 'express';
require('express-async-errors');
import weatherAPI from './services/weatherAPI';
import weatherRouter from './controllers/weather';
import itemRouter from './controllers/items';
import mongoDBConnect from './services/connect';
import {PORT,connectionUri} from './utils/config';
import {unknownEndpoint, errorHandler, requestLogging} from './utils/middleware';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());
app.use(express.json());
if (connectionUri) {
  mongoDBConnect(connectionUri);
}
else {
  console.error("no connection string specified");
}
app.use( express.static( path.join( __dirname, "reactbuild" ) ) );
app.use(requestLogging);
app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  void weatherAPI(45,32);
  res.send('pong');
});

app.use('/api/weather', weatherRouter);
app.use('/api/items', itemRouter);

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
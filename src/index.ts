import express from 'express';
import weatherAPI from './services/weatherAPI';
import weatherRouter from './controllers/weather';
import itemRouter from './controllers/items';
import mongoDBConnect from './services/connect';
import {PORT,connectionUri} from './utils/config';

const app = express();
app.use(express.json());

if (connectionUri) {
  mongoDBConnect(connectionUri);
}
else {
  console.error("no connection string specified");
}

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  void weatherAPI(45,32);
  res.send('pong');
});

app.use('/api/weather', weatherRouter);
app.use('/api/items', itemRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
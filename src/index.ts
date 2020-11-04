import express from 'express';
import weatherAPI from './services/weatherAPI';
import weatherRouter from './controllers/weather';
const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  void weatherAPI(45,32);
  res.send('pong');
});

app.use('/api/weather', weatherRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
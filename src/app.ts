import cors from 'cors';
import express, { Application, Request, Response } from 'express';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes
app.get('/', (req: Request, res: Response) => {
  console.log('Home route...');
  res.send({ status: true, message: 'Home page' });
});

export default app;

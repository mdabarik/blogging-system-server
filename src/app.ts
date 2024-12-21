import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import router from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();

// parsers
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// application routes
app.use('/api/v1', router);

// global routes
app.get('/', (req: Request, res: Response) => {
  console.log('Home route...');
  res.send({ status: true, message: 'Home page' });
});

app.use(globalErrorHandler);

export default app;

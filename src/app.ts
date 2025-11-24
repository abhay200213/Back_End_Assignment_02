import express, { Request, Response } from 'express';
import morgan from 'morgan';

const app = express();

app.use(express.json());

// HTTP request logging with Morgan
app.use(morgan('combined'));

// Basic health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.status(200).send('Server is healthy');
});

export default app;

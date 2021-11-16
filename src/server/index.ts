require('dotenv').config();
import express, { Express, Request, Response } from 'express';
import { CustomError } from './errors/custom-error';
import { giftRouter } from './routes/gift-router';

const app: Express = express();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOST: string = process.env.HOST || 'localhost';

app.use(express.json());
app.use('/api/gift', giftRouter);

app.use('*', (req: Request, res: Response) => res.send('hi team'));
app.use('*', (req: Request, res: Response) => {
  res.status(404).send('not found');
})

app.use(CustomError);

app.listen(PORT, HOST, () => console.log(`Server is listening at http://${HOST}:${PORT}`));
export default app;

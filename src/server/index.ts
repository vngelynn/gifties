import path from 'path';
import express, { Express, Request, Response } from 'express';

const app: Express = express();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOST: string = process.env.HOST || 'localhost';

app.use(express.json());
app.use('*', (req: Request, res: Response) => res.send('hi team'));

app.listen(PORT, HOST, () => console.log(`Server is listening at http://${HOST}:${PORT}`));
export default app;
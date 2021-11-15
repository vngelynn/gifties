import express, { Express, Request, Response }  from 'express';

const app: Express = express();

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
const HOST: string = process.env.HOST || 'localhost';

app.use(express.json());
app.use('*', (req:Request, res: Response) => res.send('hi'));

app.listen(PORT, HOST, () => console.log(`Server is listening at ${HOST}:${PORT}`));
export default app;
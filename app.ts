import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import { router } from './src/Routers';
dotenv.config();

const app = express();

app.use(express.json());
app.use(urlencoded({extended: true}));

app.use(router);

export { app }

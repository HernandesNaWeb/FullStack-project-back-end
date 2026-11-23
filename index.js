import 'dotenv/config'
import express from 'express';
import { connect } from './connection.js';
import router from './routes/route.js';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

app.use(cors({
  origin: ["http://localhost:5500",
    "http://127.0.0.1:5500",
    "http://localhost:5173"],
  credentials: true
}));

app.use(express.json());
app.use(cookieParser());
app.use(router);
connect();



app.listen(port, () => {
    console.log(`Servidor executando em ${port}`)
});
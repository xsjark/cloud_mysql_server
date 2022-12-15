import express, { Application, Request, Response, NextFunction } from "express";
import db from "./config/database";
import Router from "./routes/routes";
import cors from "cors";

const app: Application = express();

app.use(express.json());

app.use(cors());

(async() => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

app.use(Router);

setTimeout(()=>{
    db.sync();
},1000);

export default app
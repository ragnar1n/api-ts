import express, { Express, Request, Response } from "express";
import stringsController from "./controllers/strings";
import products from "./controllers/products";
import productlist from "./controllers/productlist";
import cors from "cors";
import bodyParser from "body-parser";
import parcelmachines from "./controllers/parcelmachines";
import elering from "./controllers/elering";
import makse from "./controllers/makse";

const app: Express = express();
app.use(cors())
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server. Hi!');
});

app.use(bodyParser.json());
app.use('/', stringsController);
app.use('/',products)
app.use('/',productlist)
app.use('/',parcelmachines)
app.use('/',elering)
app.use('/',makse)

app.use(cors({
    origin: ['http://localhost:3007']
}));
app.listen(3006,() => {
    console.log(`[server]: Server is running at http://localhost:3006`);
});
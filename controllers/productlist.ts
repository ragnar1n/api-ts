import { Request, Response, Router } from "express";
import {Toode} from "../models/Toode";

const router: Router = Router();

const tooted: Toode[] = [
    new Toode(1,"Koola", 1.5, true),
    new Toode(2,"Fanta", 1.0, false),
    new Toode(3,"Sprite", 1.7, true),
    new Toode(4,"Vichy", 2.0, true),
    new Toode(5,"Vitamin well", 2.5, true)
];

//Näita tooteid
router.get("/tooted", (req: Request, res: Response) => {
    res.send(tooted)
});

//Toote kustutamine
router.delete("/kustuta-toode/:index", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.index)) {
        tooted.splice(Number(req.params.index),1)
    }
    res.send(tooted)
});

//Kustutamine variant 2
router.delete("/kustuta-toode-variant2/:index", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.index)) {
        tooted.splice(Number(req.params.index),1);
        res.send("Toode kustutatud!");
    } else {
        res.send("Toode kustutamine ei õnnestunud, sisesta number!");
    }
});

//Toote lisamine
router.post("/lisa-toode", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.body.id) && /^[0-9]+$/.test(req.body.price)) {
        tooted.push(
            new Toode(req.body.id, req.body.name, req.body.price, req.body.isActive)
        )
    }
    res.send(tooted)
});

//Hind dollaritesse
router.patch("/hind-dollaritesse/:kurss", (req: Request, res: Response) => {
    if (/^[0-9]+$/.test(req.params.kurss)) {
        for (let index = 0; index < tooted.length; index++) {
            tooted[index].price = tooted[index].price * Number(req.params.kurss);
        }
    }
    res.send(tooted)
});

//Kustuta kõik tooted
router.get("/kustuta-tooted", (req: Request, res: Response) => {
    tooted.splice(0)
    res.send(tooted)
});

//Muuda kõikide toodete aktiivsus vääraks
router.get("/muuda-aktiivsust", (req: Request, res: Response) => {
    for (let index = 0; index < tooted.length; index++) {
        tooted[index].isActive = false;
    }
    res.send(tooted)
});

//Toode järjekorranumbri järgi
router.get("/jrk/:jrk", (req: Request, res: Response) => {
    let tooteJrk = tooted.filter(index => index.id === Number(req.params.jrk))
    res.send(tooteJrk)
});

//Suurima hinnaga toode
router.get("/suurim", (req: Request, res: Response) => {
    let maxHind = tooted.reduce((max, toode) => max.price > toode.price ? max : toode)
    res.send(maxHind)
});

export default router;
import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/hello', (req: Request, res: Response) => {
    res.send('Hello World at '+new Date());
});

router.get('/hello/:year', (req: Request, res: Response) => {
    res.send('Oled '+ (new Date().getFullYear()-Number(req.params.year))+' või '+(new Date().getFullYear()-Number(req.params.year)-1)+' aastat vana, olenevalt kas sünnipäev on juba olnud');
});

router.get("/add/:nr1/:nr2", (req: Request, res: Response) => {
    res.send(req.params.nr1 + req.params.nr2)
});

router.get("/minmax/:nr1/:nr2", (req: Request, res: Response) => {
    const nr1 = Number(req.params.nr1);
    const nr2 = Number(req.params.nr2);
    res.send(Math.random() * (nr2 - nr1 + 1) + nr1);
});

router.get("/do-logs/:arv", (req: Request, res: Response) => {
    for (let index = 0; index < Number(req.params.arv); index++) {
        console.log("See on logi nr " + index);
    }
    res.send();
});

export default router;
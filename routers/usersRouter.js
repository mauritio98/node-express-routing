import Router from "express";

const router = Router();

router.use((req, res, next) =>{
    console.log('--> userRoutres.js');
    next();
});

router.route('/:id')
    .get((req, res) => { res.send(`Estoy en metodo GET id:${req.params.id} de /user`) })
    .delete((req, res) => { res.send(`Estoy en metodo DELETE id:${req.params.id} de /user`) });

router.post('/add',(req, res) => { res.send("Estoy (ADD) añadiendo users") });

export default router;
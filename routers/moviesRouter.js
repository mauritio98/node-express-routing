import Router from "express";

const router = Router();

router.use((req, res, next) =>{
    console.log('--> moviesRoutres.js');
    next();
});

router.route('/:id')
    .get((req, res) => { res.send(`Estoy en metodo GET id:${req.params.id} de /movies`) })
    .delete((req, res) => { res.send(`Estoy en metodo DELETE id:${req.params.id} de /movies`) });

router.post('/add',(req, res) => { res.send("Estoy (ADD) añadiendo movies") });


export default router;
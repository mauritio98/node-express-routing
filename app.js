import express from 'express';
import moviesRouter from './routers/moviesRouter.js'
import usersRouter from './routers/usersRouter.js'


const app=express();

app.use(express.json());

app.use('/movies',moviesRouter);
app.use('/user', usersRouter);


export default app


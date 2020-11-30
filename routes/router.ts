import {Router,Request,Response} from 'express';

const router = Router();

router.get('/mensajes',(req:Request,res:Response)=>{
    res.json({
        ok:true,
        mensaje:'toto esta bien!!'
    })
})

export default router;
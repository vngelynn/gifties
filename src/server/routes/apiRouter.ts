import { Router } from 'express';

import userRouter from './userRouter';
import giftRouter from './giftRouter';

const router = Router();

router.use('/user', userRouter);
router.use('/gift', giftRouter);


export default router;

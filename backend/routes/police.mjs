import express from 'express'
import { createPolice, deletePolice, deletePolices, getPolice, getPolices, replacePolice, updatePolice } from '../controllers/Police.mjs';

const router = express.Router();

router.route('/')
.get(getPolices)
.post(createPolice)
.delete(deletePolices);

router.route('/:id')
.get(getPolice)
.put(replacePolice)
.patch(updatePolice)
.delete(deletePolice);

export default router;
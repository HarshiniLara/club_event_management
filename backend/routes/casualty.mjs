import express from 'express'
import { createCasualty, deleteCasualty, deleteCasualties, getCasualty, getCasualties, replaceCasualty, updateCasualty } from '../controllers/Casualty.mjs';

const router = express.Router();

router.route('/')
.get(getCasualties)
.post(createCasualty)
.delete(deleteCasualties);

router.route('/:id')
.get(getCasualty)
.put(replaceCasualty)
.patch(updateCasualty)
.delete(deleteCasualty);

export default router;
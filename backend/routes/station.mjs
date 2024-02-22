import express from 'express'
import { createStation, deleteStation, deleteStations, getStation, getStations, replaceStation, updateStation } from '../controllers/Station.mjs';

const router = express.Router();

router.route('/')
.get(getStations)
.post(createStation)
.delete(deleteStations);

router.route('/:id')
.get(getStation)
.put(replaceStation)
.patch(updateStation)
.delete(deleteStation);

export default router;
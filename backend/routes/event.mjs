import express from 'express'
import { createEvent, deleteEvent, deleteEvents, getEvent, getEventbyTopics, getEvents, getEventsOfOrganizer, getNearbyEvents, replaceEvent, updateEvent } from '../controllers/event.mjs';

const router = express.Router();

router.route('/')
.get(getEvents)
.post(createEvent)
.delete(deleteEvents);

router.route('/organizer/:organizer_id')
.get(getEventsOfOrganizer);

router.route('/nearby/:pincode')
.get(getNearbyEvents);

router.route('/topic/:topic')
.get(getEventbyTopics);

router.route('/:id')
.get(getEvent)
.put(replaceEvent)
.patch(updateEvent)
.delete(deleteEvent);

export default router;
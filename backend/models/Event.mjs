import { model, Schema } from "mongoose";

export const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    topic: {
        type: String,
    },
    category: {
        type: String,
    },
    datetime: {
        type: Date,
        default: Date.now()
    },
    description: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    n_participants: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        default: 'Any'
    },
    pincode: {
        type: Number
    },
    organizer_id:{
        type: Schema.ObjectId,
        default: null
    },
    station_id: {
        type: Schema.ObjectId,
        default: null
    }
})

export default model('Events', eventSchema);
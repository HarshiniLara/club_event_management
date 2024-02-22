import { model, Schema } from "mongoose";

export const stationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: null
    },
    phone: {
        type: Number,
        default: null
    },
    head: {
        type: Schema.ObjectId,
        default: null
    }
})

export default model('Stations', stationSchema);
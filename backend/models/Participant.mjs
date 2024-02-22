import { model, Schema } from "mongoose";

export const participantSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    dob: {
        type: Date,
        default: new Date(),
    },
    gender: {
        type: String,
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        default: null
    },
    occupation: {
        type: String,
        default: null
    },
    events_enrolled:{
        default: []
    },
    password: {
        type: String,
        default: ''
    }
})

export default model('Participants', participantSchema);
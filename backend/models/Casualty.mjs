import {Schema, model} from 'mongoose'

const casualtySchema = new Schema({
    reason: {
        type: String,
        required: true
    },
    participant_id: {
        type: Schema.ObjectId,
        required: true,
    },
    police_id: {
        type: Schema.ObjectId,
        required: true,
    },
    event_id: {
        type: Schema.ObjectId,
        required: true,
    }
})

export default model('Casualties', casualtySchema)
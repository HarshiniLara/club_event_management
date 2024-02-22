import { model, Schema } from "mongoose";

export const policeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        unique: true,
        required: true
    },
    designation: {
        type: String,
        default: 'Constable',
    },
    gender: {
        type: String,
        default: null
    },
    assigned_event:{
        type: Schema.ObjectId,
        default: null
    },
    
})

export default model('Police', policeSchema);
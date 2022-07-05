import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    detail: String,
    date: Date
}, { timestamps: true })

const Item = mongoose.model('item', itemSchema);
export default Item;

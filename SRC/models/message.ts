import mongoose, { Schema, Document} from "mongoose";

export interface IMessage extends Document {
    from: string;
    to: string;
    message: string;
    response: string;
    timestamp: Date;
}

const messageSchema: Schema = new Schema({
    from: {type: String, required: true},
    to: { type: String, required: true },
    message: { type: String, required: true },
    response: { type: String },
    timestamp: { type: Date, default: Date.now }
});

export default mongoose.model<IMessage>("Message", messageSchema);


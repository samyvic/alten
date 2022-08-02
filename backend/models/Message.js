import mongoose from 'mongoose';
import validator from 'validator';

const messageSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"User name is required"],
    },
    email:{
        type:String,
        required: [true,"Email is required"],
        lowercase: true,
        trim: true,
        validate:[validator.isEmail,"Email is required"]
    },
    phoneNumber:{
        type:String,
        required: [true,"Phone number is required"]
    },
    title:{
        type:String,
        required: [true,"Title is required"]
    },
    description:{
        type:'string',
        required: [true,"Description is required"]
    },
    date:{
        type: Date,
        default: Date.now()
    },
    read:{
        type:Boolean,
        default: false
    }
});

const Message = mongoose.model('Message',messageSchema);

export default Message;
import Message from "../models/Message.js"

export const CreateMessage = async (req, res, next) => {
    const {name,email,phoneNumber,title,description} = req.body;

    try {
        const newMessage = await Message.create
        ({name,
         email,
         phoneNumber,
         title,
         description });
        res.status(200).json({
            status:"Success",
            details:"Message created successfully",
            message:newMessage
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            details:error.message,
            
        });
    }
}

export const getAllMessages = async (req,res,next) =>{
    try {
        const messages = await Message.find();
        res.status(200).json({
            status:"Success",
            count:messages.length,
            messages
        })
    } catch (error) {
        res.status(500).json({
            status:"Failed",
            details:error.message,
            
        });
    }
}

export const getMessage = async (req, res, next) => {
    try {
        const {id} = req.params;
        const message = await Message.findById(id);
        if(!message) throw new Error("Couldn't find message");
        res.status(200).json({
            status:"Success",
            message
        })
    } catch (error) {
        res.status(404).json({
            status:"Failed",
            details:error.message,
        });
    }
}

export const readMessage = async (req, res, next) => {
    try {
        const {id} = req.params;
        const {read} = req.body;
        const message = await Message.findByIdAndUpdate(id,{read},{new:true});
        if(!message) throw new Error("Couldn't find message");
        res.status(200).json({
            status:"Success",
            message
        })
    } catch (error) {
        res.status(404).json({
            status:"Failed",
            details:error.message,
        });
    }
}

export const deleteMessage = async (req, res, next) => {
    try {
        const {id} = req.params;
        const message = await Message.findByIdAndDelete(id);
        if(!message) throw new Error("Couldn't find message");
        res.status(200).json({
            status:"Success",
        })
    } catch (error) {
        res.status(404).json({
            status:"Failed",
            details:error.message,
        });
    }
}
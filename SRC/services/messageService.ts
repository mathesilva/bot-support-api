import Message from "../models/message";

export const createMessage = async (text: string, sender: string) => {
    try{
        const newMessage = new Message({ from: sender, to: "Bot", message: text });
        return await newMessage.save(); 
    }   catch(error){
        throw new Error("Erro ao criar mensagem: " + error);
    }
};

export const getAllMessages = async ()=>{
    try {
        return await Message.find();
    } catch (error) {
        throw new Error("Error ao buscar mensagem: " + error);
    }
};

export const getAllMessagesId = async (id: string)=>{
    try {
        return await Message.findById(id);
    } catch (error) {
        throw new Error("Error ao buscar mensagem pelo ID: " + error);
    }
};

export const deleteMessage = async (id: string)=>{
    try {
        return await Message.findByIdAndDelete(id);
    } catch (error) {
        throw new Error("Error ao deletar mensagem: " + error);
    }
};
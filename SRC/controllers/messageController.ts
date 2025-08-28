import { Request, Response } from "express";
import Message, { IMessage } from "../models/message";
import { askOpenAI } from "../services/openaiService";


export const chatWithAI = async (req: Request, res: Response) => {
    try {
    const { from, to, message } = req.body;

    // 1. Salvar a mensagem do usuário
    const newMessage: IMessage = new Message({ from, to, message });
    const savedMessage = await newMessage.save();

    // 2. Obter resposta da IA
    const aiResponse = await askOpenAI(message);

    // 3. Atualizar mensagem com a resposta da IA
    savedMessage.response = aiResponse;
    await savedMessage.save();

    // 4. Retornar a resposta para o usuário
    res.status(201).json(savedMessage);

    } catch (error) {
    console.error("Erro no chatWithAI:", error);
    res.status(500).json({ error: "Erro ao processar a mensagem com a IA" });
}
};


// export const createMessage = async (req: Request, res: Response) =>{
//     try {
//         console.log("REQ BODY:", req.body);
        
//         const {from, to, message} = req.body;

//         const newMessage = new Message({
//             from, 
//             to,
//             message,
//         });
//         const savedMessage = await newMessage.save();
//         console.log("Mensagem salva: ", savedMessage);
        
//         res.status(201).json(savedMessage)
// }   catch(error:any) {
//         console.error("Erro ao salvar mensagem:", error.message); //mostrar o erro real
//         res.status(500).json({ error: "Erro ao salvar mensagem" });
// }
// };

export const getMessages = async (req: Request, res: Response) =>{
    try{
        const messages = await Message.find();
        res.json(messages);
    } catch(error){
        res.status(500).json({ error: "Erro ao buscar mensagens" });
    }
};

export const updateMessageResponse = async (req: Request, res: Response) =>{
    try {
        const { id } = req.params;
        const { response } = req.body;

        const updatedMessage = await Message.findByIdAndUpdate(
            id, 
            {response},
            {new: true}
        );

        if (!updatedMessage) {
            return res.status(404).json({ error: "Mensagem não encontrada" });
        }
        res.json(updatedMessage);
    } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar mensagem" });
    }
};

export const deleteMessage = async (req:Request, res: Response) =>{
    try {
        const id = req.params.id.trim();
        const deletedMessage = await Message.findByIdAndDelete(id);

        if (!deletedMessage) {
            return res.status(404).json({ error: "Mensagem não encontrada" });
        }
        res.json({ message: "Mensagem deletada com sucesso" });
    } catch (error) {
        console.error("Erro ao deletar mensagem:", error);
        res.status(500).json({ error: "Erro ao deletar mensagem" });
    }
};


// src/services/openaiService.ts
import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export const askOpenAI = async (prompt: string): Promise<string> => {
    try {
    const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
});
    return completion.choices[0].message?.content || "Desculpe, não entendi.";
    } catch (error) {
    console.error("Erro na OpenAI:", error);
    return "Desculpe, houve um erro ao processar sua mensagem.";
}
};

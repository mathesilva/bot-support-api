import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const generateAIResponse = async (message: string): Promise<string> => {
    try {
        const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: message }],
});

    return completion.choices[0].message.content || "Desculpe, não consegui entender.";
    } catch (error) {
    console.error("AI Error:", error);
    return "Erro ao gerar resposta.";
}
};

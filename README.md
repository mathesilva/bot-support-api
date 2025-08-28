### An AI-powered chatbot built with Node.js + TypeScript + MongoDB, integrated with OpenAI API to provide intelligent, context-aware answers.

### Um chatbot com IA desenvolvido em Node.js + TypeScript + MongoDB, integrado à API da OpenAI, para fornecer respostas inteligentes e contextuais.

✨ Features | Funcionalidades

✅ Intelligent Q&A powered by OpenAI
✅ REST API with Express.js
✅ MongoDB for storing interactions
✅ TypeScript for type safety
✅ Ready for deployment (Docker, Vercel, Railway, Render, etc.)

📂 Project Structure | Estrutura do Projeto
├── src
│   ├── config        # Database & environment configs
│   ├── controllers   # API logic
│   ├── models        # Mongoose schemas
│   ├── routes        # API routes
│   ├── services      # OpenAI & business logic
│   └── index.ts      # App entry point
├── .env.example      # Example environment variables
├── package.json
├── tsconfig.json
└── README.md

⚙️ Setup & Installation | Instalação
🔹 Requirements | Requisitos

Node.js >= 18

MongoDB (local ou Atlas)

OpenAI API Key

🔹 Steps | Passos
# 1. Clone repository | Clonar repositório
git clone https://github.com/mathesilva/bot-support-api

# 2. Enter project | Entrar no projeto
cd ai-support-bot

# 3. Install dependencies | Instalar dependências
npm install

# 4. Copy env file | Copiar arquivo de ambiente
cp .env.example .env




## Edit .env with your credentials | Edite com suas credenciais:  ###

PORT=5000
MONGO_URI=mongodb://localhost:27017/ai-support-bot
OPENAI_API_KEY=your_openai_key_here

▶️ Run Project | Executar Projeto

Development | Desenvolvimento

## npm run dev


Production | Produção

npm run build
npm start


API available at:
👉 http://localhost:5000

📡 API Endpoint

POST /api/chat

Request
{
  "message": "What is the capital of France?"
  "message": "Qual a capital da França?"
}

Response
{
  "reply": "The capital of France is Paris."
  "reply": "A capital da frança é Paris."
}

🧪 Tests | Testes
npm run test

🚀 Future Roadmap | Futuras Melhorias

 JWT Authentication

 User conversation history

 Multi-language support

 WhatsApp / Telegram integration

🤝 Contributing | Contribuindo

Contributions are welcome! Feel free to fork, open issues, and submit PRs.

Contribuições são bem-vindas! Sinta-se à vontade para dar fork, abrir issues e enviar PRs.

📄 License | Licença

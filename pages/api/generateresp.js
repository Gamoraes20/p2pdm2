import { Configuration, OpenAIApi } from "openai";
import axios from 'axios';
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
 const {texto} = req.body;
     
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: generatePrompt (texto),
      temperature: 0.6,
      max_tokens: 100
    });
    res.status(200).json({ result: completion.data.choices[0].text });
  } 

function generatePrompt(texto) {
    return `Diga qual o sentimento associado ao seguinte texto usando apenas uma palavra (Positivo, Negativo ): ${texto}.`;
}
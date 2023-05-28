import { Configuration, OpenAIApi } from "openai";
import { load } from "dotenv";
const env = await load();

const configuration = new Configuration({
    apiKey: env["OPENAI_API_KEY"] || Deno.env.get("OPENAI_API_KEY"),
  });
const openaiApi = new OpenAIApi(configuration);

export default openaiApi;
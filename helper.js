import openai from "./openaiApi.js";
import config from "./config.js";

export async function fixJSONFormat(input) {
    const fixingMessagePrompt =
    `This text in the block below (surrounded by ===) is an invalid JSON response. Please clear any text that surrounds it or anything that may make it a broken JSON format. Please fix that and return only the JSON that's fixed. Don't return anything besides the JSON.
    ===
    ${input}
    ===`

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: fixingMessagePrompt,
        temperature: 0,
        max_tokens: config.max_tokens
    });

    return JSON.parse(completion.data.choices[0].message.content.trim()); 
}
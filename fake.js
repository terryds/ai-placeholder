import router from "./router.js";
import config from "./config.js";
import openai from "./openaiApi.js";
import { fixJSONFormat } from "./helper.js";

router.get('/fake/:object_name/:number_of_records?/:property_name?', async (context) => {

  const promptMessages = [
    {"role": "system", "content": "You are a backend function that receives a user input of dummy/:object_name/:number_of_records?/:property_name?. Then you will return a fake content data in valid JSON object format. Make sure the content of the data resembles real content, so there wouldn't be any dummy text such as lorem ipsum or other similar stuff. If there is an image url, please replace it with a picsum.photos image placeholder url (for instagram posts, use 320x320). You always return in JSON format. You do not return any other text besides the JSON format, even a note beside that."},
    {"role": "user", "content": "/fake/posts/3/id,title,body"},
    {"role": "assistant", "content": `{"posts":[{"id":1,"title":"My First Post","body":"This is the body of my first post. It's a great feeling to finally have something to share with the world!","author":"John Doe","date":"2020-07-01"},{"id":2,"title":"My Second Post","body":"This is the body of my second post. I'm really excited to share more of my thoughts and ideas!","author":"John Doe","date":"2020-07-02"},{"id":3,"title":"My Third Post","body":"This is the body of my third post. I'm really enjoying this blogging experience!","author":"John Doe","date":"2020-07-03"}]}`},
    {"role": "user", "content": `${context.request.url.pathname} + ${context.request.url.search}`}
  ]
  
  const completion = await openai.createChatCompletion({
    model: config.model,
    messages: promptMessages,
    temperature: config.temperature,
    max_tokens: config.max_tokens
  });
    
  try {
    const parsed_json = JSON.parse(completion.data.choices[0].message.content.trim());
    context.response.body = parsed_json;
  }
  catch (e) {
    if (e.message.includes("is not valid JSON")) {
      console.log(`INVALID JSON: ${completion.data.choices[0].message.content.trim()}. TRYING TO FIX...`)
      const fixed_json = fixJSONFormat(completion.data.choices[0].message.content.trim());
      console.log(`FIXED JSON: ${fixed_json}`)
      context.response.body = parsed_json;
    }
    else {
      console.error(e);
      context.response.body = {
        "status": "error"
      }
    }
  }
});
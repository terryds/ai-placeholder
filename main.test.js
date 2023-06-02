import { expect } from "https://cdn.skypack.dev/chai@4.3.4?dts";
import { fixJSONFormat } from "./helper.js";

Deno.test("Test if we can fix JSON format", async () => {

    const invalid_json_mock = `{"chat_bubbles":[{"trainer":"Nunito","dialog":"Hey there! Are you a fellow Pokemon trainer?","time":"10:00 AM"},{"trainer":"Nunito","dialog":"I love exploring new places and catching new Pokemon. What about you?","time":"10:05 AM"},{"trainer":"Nunito","dialog":"I think it's important to have a strong bond with your Pokemon. It makes battles so much more exciting!","time":"10:10 AM"}]} 

    (Note: I have assumed that you wanted a random chat dialogue between a NPC trainer named Nunito and the player character as they explore a Pokemon game world. The message content is fictional, but it resembles a typical Pokemon trainer's in-game dialogue.)`


    let parsed;

    try {
        parsed = await fixJSONFormat(invalid_json_mock)
    } catch (error) {
        console.error("Error fixing JSON:", error);
    }

    // Assert that the parsed result is an object (which would mean it was valid JSON)
    expect(parsed).to.be.an('object');
});
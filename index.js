const {Configuration, OpenAIApi} = require("openai")
require("dotenv").config()

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

async function callChatGPT(text){
    try {
        const completion = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: text,
            max_tokens: 3000
        })
        console.log(completion.data.choices[0].text)
    }catch (e) {
        console.log(e)
    }
    
}



callChatGPT("write an article on advantages of chatgpt")
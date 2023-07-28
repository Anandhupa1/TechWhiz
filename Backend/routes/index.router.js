const { openai } = require("../configs/openai");

const IndexRouter = require("express").Router();


IndexRouter.get("/",async(req,res)=>{
    try {
        try {


      
                      const chatCompletion = await openai.createChatCompletion({
                        model: "gpt-3.5-turbo",
                        messages: [
                          { role: "user", content: "What is the weather today?" },
                          { role: "assistant", content: "The weather is sunny and warm." },
                          // Add more messages here for further interactions
                          { role: "user", content: req.body.message }, // User's new message
                        ],
                      });
                      
                      console.log(chatCompletion.data.choices[0].message);
                      
                      res.send(chatCompletion.data.choices[0].message)
            
                } catch (error) {
                    console.log(error)
                }


    } catch (error) {
        console.log(error)
    }
})











module.exports={IndexRouter}
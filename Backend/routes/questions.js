const { InterviewModel } = require("../Models/interview.model");
const { openai } = require("../configs/openai");

const questionRouter = require("express").Router();





questionRouter.post("/",async(req,res)=>{
    try {
        
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "user", content: `You need to give me an important and different interview question on the topic ${req.body.subject} .
                  the question should be ${req.body.level} level . the question need to be different and random , give very random questions .
                  only give me the question as a string in reply, dont add anything else ,only the question.s
              ` },
              
              // Add more messages here for further interactions
              
            ],
          });
          
          console.log(chatCompletion.data.choices[0].message.content);
          
          res.send(chatCompletion.data.choices[0].message.content)

    } catch (error) {
        console.log(error)
    }
})


questionRouter.post("/feedback",async(req,res)=>{
    try {
        
        const chatCompletion = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
              { role: "user", content: `
              I have a question : ${req.body.question} , also my answer to this question = ${req.body.answer}
              You need to analyse this question and answer. Then give me feedback .create a key feedback in object , The feedback will evaluate the content,technical knowledge, delivery of answer, also It will highlight the student strengths and suggest areas for improvement, such as communication skills, technical knowledge,
              feedback should be less than 500 .give result in string format.
              `},
              { role: "assistant", content: "The weather is sunny and warm." },
              // Add more messages here for further interactions
              
            ],
          });
          
          console.log(chatCompletion.data.choices[0].message.content);
          //__________________________________________________________
          res.send(chatCompletion.data.choices[0].message.content);
          




        //   res.send(chatCompletion.data.choices[0].message.content);
        //   res.send({
        //     result : chatCompletion.data.choices[0].message.content,
        //     dbCheck:currentInterview.results,
        //   })
    } catch (error) {
        console.log(error)
    }
})








module.exports={questionRouter}
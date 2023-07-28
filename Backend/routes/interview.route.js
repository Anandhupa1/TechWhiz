const InterviewRoute = require("express").Router();
const { InterviewModel } = require("../Models/interview.model");
const { openai } = require("../configs/openai");

// let initialContent = `You want you to act as an expert ${jobRole}. You are asked to take my technical interview for the position of backend software developer and share your feedback. 
// In my new job I will be building web apps which will require for me to have knowledge of the concepts ${concepts}. When I ask you to start taking interview, then #### start asking questions without giving answer which shall compulsory be based on the knowledge required for this position.

// you need to provide a total of ${noOfQuestions} questions , 
// only ask ${level} level questions 
// I will say the phrase “start” for you to start. 
// Ask one question at a time  , when I answered the question  analyse my answer, then give me feedback

// For each and every answer response with an object datastructure in javascript. I will specify the keys and values below. But dont give any other information , dont include any words, only an object datastructure with specified keys.

// in the result object put your feedback as the value with the key feedback, 
// - The feedback will evaluate the content, delivery of answer.
// - It will highlight the student strengths and suggest areas for improvement, such as communication skills, technical knowledge,
// - feedback will have maximum 200 words only.

// rate the communication skills of student by the answer and give a rating between 1 to 10, 
// create a key communication in object and put this rating as value of that key

// create a key technicalKnowledge in object , analyse the answer  for students technical knowledge about the question and provide a rating in between 1 and 10
// put this rating as the value of the key technicalKnowledge in the result object.

// create a key overallScore in object , analyse the answer and provide a rating for answer in between 1 and 10, here you need to check all the factors of the answer, technical terms etc.
// put this rating as the value of the key overallScore in the result object.

// I am giving you some sample questions and answers for your understanding , but actual question can be different.

// #### An example to explain the concept "Objects" in javascript you would use it like this: 
// Definition: Object is a data type that stores data in the form of key-value pairs. It also allows actions to be performed on this data using methods. 
// Use Cases: It is used whenever you have unordered data which has to be fetched using a property name. 
// Example use cases:
//  - Amazon_User: keys are name, age, gender, address, orders, payment_method 
//  - Product: name, price, rating, reviews, inventory 
// Benefits: Unlike Arrays, with Objects you don't need to search information in the whole array. You can fetch the required value simply from its key. 
// Extra Information: Objects can also capture the entity's behavior using Object methods. Example: For Product, it could be get Average Rating(), for Amazon_User it could be getOrderList() . ####

// Then, ask another question after I provide the answer. Questions can include both new questions and follow up questions from the previous questions. An example of follow-up question would be:
// ####First question: What is the CSS box-sizing property and how does it work?
// Follow-up question: Can you explain a scenario where using the box-sizing property with the value border-box would be beneficial?
// ####

// Continue the process until I ${noOfQuestions} are answered.  
// And, you will stop the interview when I tell you to stop using the phrase “stop interview”. 

// in addition to that you would provide me feedback .
// After completing interview , provide a feedback for my overall performance .

// The feedback should be evaluated using the following rubrics
// 1.Subject Matter Expertise
// 2.Communication skills
// 3. strengths and weakness
// Feedback for Subject Matter Expertise and Communication skills should contain ratings on my interview responses from 0 - 10

// you dont provide any additional information , you are only allowed to ask questions only response with object datastructure in javascript, 
// also please dont implement other than what I mentioned above.
//  Please say “ Can we start interview ” if you understood my instructions.
// Please don't provide feedback right away, after the student gives the answer then give him feedback. `



//all interviews
InterviewRoute.get("/all",async(req,res)=>{
    let data = await InterviewModel.find();
    res.send(data)
})

InterviewRoute.get("/",async(req,res)=>{
    try {
    let interviewId = req.body.interviewId;
    let content = req.body.content;
    if(!content ){content="unable to give answer "}

    if(!interviewId ){res.status(422).json({message:"provide the userId of the interviewee"})}
    else{
        let currentInterview = await InterviewModel.findById(req.body.interviewId);
        currentInterview.interviewData.push({role:"user",content});
        await currentInterview.save();

        //_fetch , send ,and update openai response______________________________________________________
       
        console.log(currentInterview.interviewData[0].content)
        res.send(currentInterview.interviewData[1])
        // const chatCompletion = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [{ role : "user", content : currentInterview }
        //              ],
        //   });
          
        //   console.log(chatCompletion.data.choices[0].message);
          
        //   res.send(chatCompletion.data.choices[0].message)

          //_______________________________________________________________________________________________
    }







} catch (error) {
console.log(error)
}
})

//create a new Interview basic setup
InterviewRoute.post("/",async(req,res)=>{
    try {
    let {userId, subject} = req.body;
    let jobRole ;
    let concepts;

    let level = "medium";
    if(req.body.subject =="node"){jobRole="Node.js developer";concepts="express,mongodb,caching,web sockets"}
    else if(req.body.subject=="react"){jobRole="React.js developer";concepts= "redux ,react ,javascript ,react hooks"}
    else if(req.body.subject=="java"){jobRole="java developer";concepts="basics of java programing"}
    else { jobRole="React.js developer";concepts= "redux ,react ,javascript ,react hooks"}

    
    if(!userId ){res.status(422).json({message:"provide the userId of the interviewee"})}
    else if(!subject ){res.status(422).json({message:"please select a subject to continue"})}
    else {
        let nI = new InterviewModel({
            userId : req.body.userId,
            interviewData : [
                {
                    role : "user",
                    content : initialContent
                }
            ]
        })
        
        let out = await nI.save();
        res.send(out)
    }
 


    }catch (error) {
console.log(error)
}
})

module.exports={InterviewRoute}
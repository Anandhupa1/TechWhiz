
function starterTemplate(subject,level,noOfQuestion,name){
    let jobRole;
    let concepts;
    if(subject =="node"){jobRole="Node.js developer";concepts="express,mongodb,caching,web sockets"}
    else if(subject=="react"){jobRole="React.js developer";concepts= "redux ,react ,javascript ,react hooks"}
    else if(subject=="java"){jobRole="java developer";concepts="basics of java programing"}
    else { jobRole="React.js developer";concepts= "redux ,react ,javascript ,react hooks"}
  
  let str = `You want you to act as an expert ${jobRole}. You are asked to take my technical interview for the position of backend software developer and share your feedback. 
  In my new job I will be building web apps which will require for me to have knowledge of the concepts ${concepts}. When I ask you to start taking interview, then #### start asking questions without giving answer which shall compulsory be based on the knowledge required for this position.
  
  
  only ask ${level} level questions 
  I will say the phrase “start” for you to start. 
  Ask one question at a time  , when I answered the question  analyse my answer, then give me feedback
  
  For each and every answer response with an object datastructure in javascript. I will specify the keys and values below. But dont give any other information , dont include any words, only an object datastructure with specified keys.
  
  if i am not able to answer the question then also give a result with the follwing category, don't move to next question directly.
  in the result object put your feedback as the value with the key feedback, 
  
  
  create a key feedback in object , The feedback will evaluate the content,technical knowledge, delivery of answer, also It will highlight the student strengths and suggest areas for improvement, such as communication skills, technical knowledge,
  feedback will have maximum 400 words only and minimum 100 words.
  put this feedback as the value of the key feedback in the result object.
  
  
  rate the communication skills of the given answer and give a rating between 1 to 10, 
  create a key communication in object and put this rating as value of that key
  
  create a key technicalKnowledge in object , analyse the answer  for students technical knowledge about the question and provide a rating in between 1 and 10
  put this rating as the value of the key technicalKnowledge in the result object.
  
  create a key overallScore in object , analyse the answer and provide a rating for answer in between 1 and 10, here you need to check all the factors of the answer, technical terms etc.
  put this rating as the value of the key overallScore in the result object.
  
  
  create a key called strengths and put what are the strengths and weakness of the answer that i had given as the value of this key , which should not be more than 200 words.
  
  create a key called sampleAnswer and put a sample answer to the question which includes all the technical features related to thequestion less than 500 words, as the value of this key. 
  
  
  And, you will stop the interview when I tell you to stop using the phrase “stop interview”. 
  
  only After i said the phrase "stop interview" , provide a feedback for my overall performance .The feedback should be evaluated using the following rubrics
  1.Subject Matter Expertise
  2.Communication skills
  3. strengths and weakness
  
  
  you dont provide any additional information , you are only allowed to ask questions only response with object datastructure in javascript, no other communication is needed
  also please dont implement anything  other than what I mentioned above. 
  I want the output in JSON format only . you can give a stringified version of JSON data.
  
  Please don't provide feedback right away, after I gives the answer then give me feedback.
  please ask questions one by one , only one question at a response , then allow me to give an answer to that question , then give me feedback only after that you need to move into next question.
  
   Please say “ Can we start interview ” if you understood my instructions.
  
  `
  
  return [{role:"user",content:str}];
  }
  
  
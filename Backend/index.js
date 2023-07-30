const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const { connection } = require("./configs/mongoose.connection");
const { openai } = require("./configs/openai");
const { IndexRouter } = require("./routes/index.router");
const cors = require("cors");
const { InterviewRoute } = require("./routes/interview.route");
const { questionRouter } = require("./routes/questions");
const app = express();
require("dotenv").config();

//third party & inbuilt middlewares________________________________________________________
app.use(express.json());
app.use(cors())


app.use("/",IndexRouter);
app.use("/interview",InterviewRoute);
app.use("/q",questionRouter);


app.listen(8000,async()=>{
    try {
        await connection;
        console.log("connected to remote database")
    } catch (error) {
        console.log("error in connection ",error)
    }
    console.log(`app started at port ${process.env.port}`)
})
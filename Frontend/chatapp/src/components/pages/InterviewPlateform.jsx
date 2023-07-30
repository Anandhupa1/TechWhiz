
import styled from "styled-components";
import QuestionBox from "../QuestionBox";
import Avatar from "../Avatar";
import TextBox from "../TextBox";


const InterviewPlateform = () => {
  return (
    <DIV>

    <div className="container">
    <Avatar/>
    <QuestionBox/>
    <TextBox/>
    </div>

    </DIV>
  )
}

export default InterviewPlateform;

const DIV=styled.div`
//#010750,#490d61
.container{
    width:100%;
    min-height: 100vh;
    display:flex;
    margin-left: 20px;
    flex-direction: column;
}

`


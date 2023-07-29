
import styled from "styled-components";
import QuestionBox from "../QuestionBox";
import Avatar from "../Avatar";
import TextBox from "../TextBox";


const InterviewPlateform = () => {
  return (
    <div>

    <div className="container">
    <Avatar/>
    <QuestionBox/>
    <TextBox/>
    </div>

    </div>
  )
}

export default InterviewPlateform;

const DIV=styled.div`
//#010750,#490d61
.container{
    width:100%;
    background: linear-gradient(45deg,#00695C,#010750);
    min-height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

`







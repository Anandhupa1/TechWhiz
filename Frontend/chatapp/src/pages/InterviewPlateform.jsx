
import styled from "styled-components"
import TextBox from "../components/TextBox";
import QuestionBox from "../components/QuestionBox";
import Avatar from "../components/Avatar";


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
    background: linear-gradient(45deg,#00695C,#010750);
    min-height: 100vh;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

`







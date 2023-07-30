
import styled from "styled-components"

const QuestionBox = () => {
  return (
    <DIV>
        <textarea className="questionBox" placeholder="Question will be appear here...Please wait for Question..." spellCheck="false"/>
    </DIV>
  )
}

export default QuestionBox;


const DIV=styled.div`

textarea{
    width:65%;
    height:215px;
    background: #E0E0E0;
    color:#131418;
    font-size: 22px;
    border:0;
    outline:0;
    border-radius: 5px;
    resize:none;
    padding:15px;
    margin-bottom:20px;
}


textarea::placeholder{
    font-size: 16px;
    color:#90A4AE;
}


`



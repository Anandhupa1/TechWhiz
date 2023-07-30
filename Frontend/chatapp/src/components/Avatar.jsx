
import avatar from "../utilities/images/avatar.jpeg"
import styled from "styled-components"
const Avatar = () => {
  return (

    <DIV>
     <div>
     <img src={avatar} alt="avatar"/>
     </div>
    </DIV>
   
  )
}

export default Avatar;

const DIV=styled.div`

display:flex;
align-items: center;
margin-left:20px;

img{
    width:40%;
    border-radius: 40%;
    margin-bottom:10px; 
}

.user{
  color:white;
}






`
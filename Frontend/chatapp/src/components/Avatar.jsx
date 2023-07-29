
import avatar from "../utilities/images/avatar.jpeg"
import styled from "styled-components"
const Avatar = () => {
  return (
    <DIV>

    <div>
      <select>
      <option>Please Select</option>
      <option>MERN Stack</option>
      <option>JAVA</option>
      <option>NODE Js</option>
      <option>REACT Js</option>
      </select>

      <button>Start</button>
    </div>

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

img{
    width:40%;
    border-radius: 40%;
    margin-bottom:10px; 
}

select{
  width:250px;
  color:#fff;
  background-color: #00695C;
  height:50px;
  padding:0 50px;
  font-size: 16px;
  outline:0;
  border:0;
  border-radius: 35px;
  cursor:pointer;
  margin-right:30px;

}

button{
    width:140px;
    background-color:#AD1457;
    color:#fff;
    font-size: 14px;
    padding:15px 25px;
    border-radius: 30px;
    border:0;
    outline:0;
    cursor:pointer;
    margin-right:100px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }

  button:hover{
    
  }




`
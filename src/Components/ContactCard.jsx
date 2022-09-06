import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png"

const ContactCard = (props) => {

  //object destructructuring 
  const { id, name, phone_number } = props.contact;
 // console.log(props.clickHander(id));

  console.log("id : " , id)
  return (

    <div className="item" style={{ display: "float" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content"> 
      {/* link to go to the contact detail pages  */}
      <Link to={{pathname:`/contact/${id}`,state:{contact:props.contact}}}>
        <div className="header">{name}</div>
        <div>{phone_number}</div>
      </Link>
      </div>
      
      {/* <Link to="/ConformationDelete"> */}
        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px",cursor:'pointer' }}
          onClick={() => props.clickHander(id) }
          
          
          
          ></i>
      {/* </Link> */}
      
    </div>


  )
}
export default ContactCard;
import React from "react";
import user from "../images/user.png"

const ContactCard = (props) => {

  //object destructructuring 
  const { id, name, phone_number } = props.contact;
 // console.log(props.clickHander(id));


  return (
    <div className="item" style={{ display: "flex" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content"> 
        <div className="header">{name}</div>
        <div>{phone_number}</div>
      </div>
      <div>

        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px",cursor:'pointer' }}
          onClick={() => props.clickHander(id)}
      
        ></i>
      </div>
    </div>


  )
}
export default ContactCard;
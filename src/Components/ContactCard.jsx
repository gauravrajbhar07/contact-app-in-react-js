import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png"
// import ConformationDelete from "./ConformationDelete";

const ContactCard = (props) => {
  console.log(props);
  // const [openModel,setopenModel] = useState(false) //object destructructuring 
  const { id, name, phone_number } = props.contact;
  // console.log(props.clickHander(id));




  console.log("id : ", id)
  return (

    <div className="item" style={{ display: "float" }}>
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        {/* link to go to the contact detail pages  */}
        <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
          <div className="header">{name}</div>
          <div>{phone_number}</div>
        </Link>
      </div>

      {/* <Link to={`/ConformationDelete/${id}`}> */}


      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px", cursor: 'pointer' }}
        onClick={() => props.clickHander(id)}
      >

      </i>

      <Link to={{pathname:"/edit",state:{contact:props.contact}}}>
        <i
          className="edit alternate outline icon"
          style={{ color: "blue", marginTop: "7px", cursor: 'pointer', marginRight: "14px" }}
          
        >

        </i>
        </ Link >
        {/* {openModel && <ConformationDelete/>} */}
        {/* </Link> */}

    </div>


  )
}
export default ContactCard;
import React from 'react'
import { Link } from 'react-router-dom'
import user from "../images/user.png"

const ContactDetail = (props) => {
    const {name,phone_number} = props.location.state.contact;
  return (
    <div className='main'>
        <div className="ui card centered ">
            <div className="image">
                <img src = {user} alt="user" />
                <div className='content'>
                    <div className='header ' 
                    style={{display:"flex",justifyContent:"center",fontWeight:"bold",fontSize:"25px"}}
                    >{name}</div>
                    <div className='description'>{phone_number}</div>
                </div>
            </div>
        </div>

        <div className="center-div" style={{display:"flex",justifyContent:"center"}}>
           <Link to="/">
            <button className='ui button blue center'>Back to Contact List</button>
           </Link>
        </div>
      
    </div>
  )
}

export default ContactDetail;

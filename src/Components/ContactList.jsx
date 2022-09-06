import React  from "react";
import {Link } from "react-router-dom";
import ContactCard from "./ContactCard";


const ContactList = (props) => {
        console.log(props);

        const deleteContactHandler = (id) => {
            //console.log(props.getContactId(id));
            props.getContactId(id)
        };


        // const contacts = [
        //     {
        //         id:"1",
        //         "name":"gaurav",
        //         "phone_number":"1245653252"
        //     }
        // ]
        const renderContactList =  props.contacts.map((contact)=>{
            return(
                <ContactCard 
                    contact={contact} 
                    clickHander={deleteContactHandler}
                    key={contact.id} 
                />

                
                
            )
        })

        return(
            <div className="ui  celled list">
                <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                <h2  >Contact list
                </h2>
                <Link to="/add">
                    <button className="ui button blue right" style={{justifyContent:"space-between"}}>Add Contact</button>
                </Link>
                </div>
                
                {renderContactList}
                

            </div>
        )


}

export default ContactList;
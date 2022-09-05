import React  from "react";
import ContactCard from "./ContactCard"


const ContactList = (props) => {
        console.log(props);

        const deleteContactHandler = (id) => {
            //console.log(props.getContactId(id));
            props.getContactId(id)
        };
        
        const renderContactList = props.contacts.map((contact)=>{
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
                <h4>contact list</h4>
                {renderContactList}
                

            </div>
        )


}

export default ContactList;
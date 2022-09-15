    import React ,{useRef} from "react";
    import {Link } from "react-router-dom";
    import ContactCard from "./ContactCard";



    const ContactList = (props) => {

        console.log(props);
        const inputEl = useRef("");
        

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

            const getSearchTerm = () => {
            // console.log(inputEl.current.value)
                props.searchKeyword(inputEl.current.value)
            };

            


            return(
                <div className="ui  celled list">
                    <div style={{display:"flex",justifyContent:"space-between",marginBottom:"10px"}}>
                    <h2  >Contact list
                    </h2>


                    <Link to="/add">
                        <button className="ui button blue right" style={{justifyContent:"space-between"}}>Add Contact</button>
                    </Link>
                    </div>

                    <div className="ui search" >
                        <div className="ui icon input" style={ {width:"100%"}}>

                            <input type="text"
                            ref={inputEl}
                            placeholder="Search contacts"
                            className="prompt"
                            style={{width:"100%"}}
                            value={props.term}
                            onChange={getSearchTerm}
                            />
                            <i className="search icon"></i>

                        </div>
                    </div>

                
                    {renderContactList.length > 0 ? renderContactList : "No Contacts available"}
                    

                </div>
            )


    }

    export default ContactList;
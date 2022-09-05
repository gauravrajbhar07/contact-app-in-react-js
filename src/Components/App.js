import React ,{ useState,useEffect} from 'react';
import {uuid} from "uuidv4"
import "./App.css";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';





function App() {

    // const contacts = [
    //     {
    //         id:"1",
    //         name:"gaurav",
    //         phone_number:"8320829578"
    //     },
    //     {
    //         id:"2",
    //         name:"pooja",
    //         phone_number:"7856452389"
    //     }
    // ] 


    //using useState hook 

    const LOCAL_STORAGE_KEY = "contacts"
    const [contacts,setContacts] = useState([]) 


    const addContactHandler = (contact) => {
        console.log(contacts)
        //update the states 
        //rest  operator ...
        setContacts([...contacts,{id : uuid(),...contact}]);

    };


    const removeContactHandler = (id) => {
        
        const newContactList = contacts.filter((contact) =>{
            // console.log(contact)
            // console.log(contact.id)
            // console.log(id)
            return (contact.id !== id);
        });

      //  console.log(" i m newContactList", newContactList)

        setContacts(newContactList);

        


    };

    //use effect to persisting the data 
    //using use effect 

    useEffect(()=>{
        const retriveContacts= JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if(retriveContacts)setContacts(retriveContacts);

    },[])

    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
    },[contacts])



    return (
        <div className='ui container'>
            <Header />
            {/* passing function as a props for getting value from the child to parant  */}
            <AddContact addContactHandler={addContactHandler}/>
            <ContactList contacts = {contacts} getContactId = {removeContactHandler}/>
        </div>
    )
}

export default App;

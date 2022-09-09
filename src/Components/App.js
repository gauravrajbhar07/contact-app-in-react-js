import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4"
import "./App.css";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import api from "../api/contacts"
import Editcontact from './EditContact';
// eslint-disable-next-lin
// import ConformationDelete from './ConformationDelete';





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
    const [contacts, setContacts] = useState([])


    const addContactHandler = async (contact) => {
        console.log(contacts)


        //update the states 
        //rest  operator ...

        const request = {
            id: uuid(),
            ...contact
        }

        console.log("hello")
        const response = await api.post("/contacts",request)

        setContacts([...contacts,response.data]);
        console.log(response)
        console.log(response.data)

    };

    //deleting the data
    //delete data from rest api
    const removeContactHandler =async (id) => {

        await api.delete(`/Contacts/${id}`);
        // if(window.confirm("ARE SURE TO DELETE THIS NUMBER ??")===true){
        
            console.log(contacts)
            const newContactList = contacts.filter((contact) => {
            // console.log(contact)
            // console.log(contact.id)
            // console.log(id)
            return (contact.id !== id);
            });

        console.log(" i m newContactList", newContactList)

            setContacts(newContactList);

        // }
        // else{
        //     alert("Number is not Deleted ")
        //     return false;
        // }
        
        



    };

    //use effect to persisting the data 
    //using use effect 


    //commenting the local host data retriving 

    
        // const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        // if (retriveContacts) setContacts(retriveContacts);

    // useEffect(() => {
    //     const getAllContacts = async () ={
    //         const allContacts = await retriveContacts()

    //     }



    // }, [])

    useEffect(()=>{
        const getAllContacts = async () => {
            const allContacts = await retriveContacts();
            if(allContacts) setContacts(allContacts);
        }
        getAllContacts();
    },[]);




    //fetch all contact 
    //and retriving a data 
    const retriveContacts = async () => {
        const respone  = await api.get("/contacts");
        //using asyn and await
        return respone.data;

    }

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts])


    //update contact 


    
    const updateContactHandler = async (contact) => {

        const response = await api.put(`/contacts/${contact.id}`,contact)
        console.log(response.data)
        const {id,name,email} = response.data;
        setContacts(contacts.map(contact => {
            return contact.id === id ? {...response.data} :contact;
        }))
    };



    return (
        <div className='ui container'>

            {/* //set the router  */}
            <Router>

                <Header />
                <Route
                    path="/"
                    exact
                    //using render props
                    //correct apporach for passing a props in a routes 
                    render={(props) => (
                        <ContactList {...props} contacts={contacts} getContactId={removeContactHandler} />
                    )}

                />
                <Switch>
                    <Route
                        path="/add"
                        render={(props) => (
                            <AddContact {...props} addContactHandler={addContactHandler} />
                        
                        )}
                    />
                    {/* <Route path = "/" component={ContactList} /> */}


                    <Route
                        path="/edit"
                        render={(props) => (
                            <Editcontact {...props} updateContactHandler={updateContactHandler} />
                        
                        )}
                    />

                    <Route path="/contact/:id" component={ContactDetail} />         

                </Switch>

                {/* <ConformationDelete message={"text"}/> */}

                {/* <AddContact addContactHandler={addContactHandler}/>
                <ContactList contacts = {contacts} getContactId = {removeContactHandler}/> */}
            </Router>


            


        </div>
    )
}

export default App;

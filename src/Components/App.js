import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { uuid } from "uuidv4"
import "./App.css";
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
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


    const addContactHandler = (contact) => {
        console.log(contacts)
        //update the states 
        //rest  operator ...
        setContacts([...contacts, { id: uuid(), ...contact }]);

    };

    //deleting the data
    const removeContactHandler = (id) => {
        if(window.confirm("ARE SURE TO DELETE THIS NUMBER ??")===true){

            console.log(contacts)
            const newContactList = contacts.filter((contact) => {
            // console.log(contact)
            // console.log(contact.id)
            // console.log(id)
            return (contact.id !== id);
            });

        //  console.log(" i m newContactList", newContactList)

            setContacts(newContactList);

        }
        else{
            alert("Number is not Deleted ")
            return false;
        }
        
        



    };

    //use effect to persisting the data 
    //using use effect 

    useEffect(() => {
        const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
        if (retriveContacts) setContacts(retriveContacts);

    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    }, [contacts])



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

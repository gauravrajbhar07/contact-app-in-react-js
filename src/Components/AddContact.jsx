import React  from "react";

//class componets 

class Addcontact extends React.Component{
    //state 
    
    state = {
        name: "",
        phone_number: ""
    }

    //arrow function 

    add = (e) => {
        //not to refresh
        e.preventDefault();
        if(this.state.name === "" || this.state.phone_number === ""){
            alert("ALL THE FEILDS ARE MANDATORY ")
            return
        }

        console.log("i m this states",this.state)
        this.props.addContactHandler(this.state);
        this.setState({name:" ",phone_number:" "})
        this.props.history.push("/");


    };


    render(){
        return (
            <div className="ui main">
                <h2 className="ui  centered header">Add Contact</h2>
                <form className="ui form" action="" onSubmit={this.add}>
                    <div className="field">
                        <label htmlFor="">Name</label>
                        <input 
                        type="text" 
                        name =" name" 
                        placeholder="Enter name" 
                        value= {this.state.name}
                        onChange={(e)=>{this.setState({name: e.target.value})}}
                        />
                    </div>

                    <div className="field">
                        <label htmlFor="">phone number </label>
                        <input 
                        type="number" 
                        name =" =pname" 
                        placeholder="Enter phone number"
                        value= {this.state.phone_number}
                        onChange={(e)=>{this.setState({phone_number: e.target.value})}}
                        />
                    </div>

                    <div>
                        <button className="ui button blue">ADD</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Addcontact;
import React  from "react";




//class componets 

class Editcontact extends React.Component{
    //state 
    constructor(props){
        super(props)
        const {id,name,phone_number}= props.location.state.contact;

        this.state={
            id,
            name,
            phone_number
        }
    }
    
    state = {
        name: "",
        phone_number: ""
    }

    //arrow function 

    update = (e) => {
        //not to refresh
        e.preventDefault();
        if(this.state.name === "" || this.state.phone_number === ""){
            alert("ALL THE FEILDS ARE MANDATORY ")
            return
        }

        console.log(this.state)
        this.props.updateContactHandler(this.state);
        this.setState({name:" ",phone_number:" "})
        this.props.history.push("/");


    };


    render(){
        return (
            <div className="ui main">
                <h2 className="ui  centered header">Update Contact</h2>
                <form className="ui form" action="" onSubmit={this.update}>
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
                        <button className="ui button blue">Update</button>
                    </div>
                </form>
            </div>

        );
    }
}

export default Editcontact;
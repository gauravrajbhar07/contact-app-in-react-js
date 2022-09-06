  import React from 'react'

  const ConformationDelete = (props) => {
    // eslint-disable-next-lin
    // const {message} = props;
    // eslint-disable-next-lin
    return (
      <div className='container' style={{
        position:"fixed",
        top:"0",
        bottom:"0",
        right:"0",
        left:"0",
        backgroundColor:"rgba(0,0,0,0.5)"
        }}>
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          position:"absolute",
          top: "50%",
          left : "50%",
          transform:"translate(-50%,-50%)",
          backgroundColor:"white",
          padding : "100px",
          borderRadius:"5px"
        }}>

          <h2 style={{color:'#111'}}>{"ARE U SURE TO DELETE THE CONTACT ?"}</h2>

          <div style={{
            display:"flex",
            alignItems:"center",
            
          
          }}>
            <button style={{backgroundColor:"red",color:"white", height:"40px",width :"80px",border:"none",margin:"20px",borderRadius:"5px",cursor:"pointer"}}>YES</button>
            <button style={{backgroundColor:"green",color:"white", height:"40px",width :"80px",border:"none",margin:"20px",borderRadius:"5px",cursor:"pointer"}}>NO</button>
          </div>


        </div>
      </div>
    )
  }

  export default ConformationDelete
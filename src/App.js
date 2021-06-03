import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel,InputGroup,ToggleButton,ButtonGroup } from "react-bootstrap";
import Title from './Title';
import background from "./reactjs.jpg";
import Header from './Header'

  
function App() {
return (

<div style={{ backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      overflow: 'hidden',
      backgroundPosition: 'center',
      height: 754,

}}>

<div className="App">
        <Header />
    </div> 
   
<div className="card shadow-sm border-0 px-3 rounded-2 mb-3 py-4 mx-auto mt-5 ">

  <div className="card-header bg-transparent border-0 text-center"> <Title /></div>
  
  <div className="card-body">
    <form action="https://reactjs.org/" encType="multipart/form-data" autoComplete="off">
      <div className="form-group">
        
        <input name="name" type="text" placeholder="UserName" className="form-control"   />
     
      </div>
      <div className="form-group">
        
        <input name="email" type="email"  className="form-control" placeholder="Email"  />
     
     
      </div>
      <div className="form-group">
        
        <input name="contact" type="text" className="form-control" placeholder="Contact"  />
      </div>
      <div className="form-group">
        
        <textarea name="message" type="text" className="form-control" placeholder="Your Message"  />
     
      </div>
        <p className="text-center mb-0"><input type="submit" className="btn btn-primary btn-lg btn-newsletter " value="Suscribe to the Newsletter" /></p>
    </form>
    
  </div>
</div>

</div>
     
    
    );
  }

  


export default App;
import React from 'react';
const Form=(props)=>{
    
return(
    <div className="form-wrapper">
    <h1>CREATE ACCOUNT</h1>
       <form  onSubmit={props.submit}>
          <div className="firstName">
            <label>FirstName:</label>
            <input 
            type="text" 
            className=""
            placeholder="First Name"
            name="firstname"
            onChange={props.change}
            />
           <p>{props.formerror.firstname.length>0? props.formerror.firstname:""}</p>

         </div>  


         <div className="lastName">
            <label>LastName:</label>
            <input 
            type="text" 
            className=""
            placeholder="Last Name"
            name="lastname"
            onChange={props.change}
            />
             <p>{props.formerror.lastname.length>0? props.formerror.lastname:""}</p>

         </div>  


         <div className="email">
            <label>Email:</label>
            <input 
            type="text" 
            className=""
            placeholder="Email"
            name="email"
            onChange={props.change}
            />
           <p>{props.formerror.email.length>0? props.formerror.email:""}</p>

         </div>  



         <div className="password">
            <label>Password:</label>
            <input 
            type="password" 
            className=""
            placeholder=""
            name="password"
            onChange={props.change}
            />
            <p>{props.formerror.password.length>0? props.formerror.password:""}</p>
         </div>  


         
         <input className="button" type="submit" value="submit" name=""/>


       </form>

   </div>
   
);


}
export default Form;


/*  
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);


const formValid= ({formerrors,...rest})=>{
  let valid=true;
  
  Object.values(formerrors).forEach(val=>{
    val.length>0 ? valid=false : valid=true;
  });
  


  Object.values(rest).forEach(val=>{
    val===null ? valid=false : valid=true;
  });
  
  return valid;
}


class App extends Component{
constructor(props){
  super(props);
   this.state={
     firstname: null,
     lastname: null,
     email: null,
     password: null,
     formerrors:{
       firstname:"",
       lastname:"",
       email:"",
       password:""
     }
   }

}


handleChange=e=>{
  const name=e.target.name;
  const value=e.target.value;
  this.setState({[name]:value});

   let formerrors=this.state.formerrors;
   e.preventDefault();
   switch(name){
     case 'firstname':
       formerrors.firstname=value.length<3  && value.length>0?  'minimum 3 characters required':"";
     break;

     case 'lastname':
       formerrors.lastname=value.length<3  && value.length>0?  'minimum 3 characters required':"";
     break;
      
      
     case 'email':
      formerrors.email= emailRegex.test(value) && value.length>0? '': 'invalid email';
      break;

      case 'password':
        formerrors.password=value.length<6  && value.length>0?  'minimum 6 characters required':"";
        break;

        default:
          break;

   }

    
}



handleSubmit=e=>{
  e.preventDefault();


  if (formValid(this.state)){
    console.log(`
       first Name:${this.state.firstname}
       Last Name:${this.state.lastname}
       email:${this.state.email}
       password:${this.state.password}
    `);
  }else{
    const rest={...this.state};
    Object.values(rest).forEach(val=>{
      if(val===null){
        console.log(`fillup the entire fields`);
      }else{
        console.log("form is not valid");
      }
    });
  }
};


  render(){

    return(
    <div className="App">
      <Form submit={this.handleSubmit} change={this.handleChange} formerror={this.state.formerrors}/>
         </div>
    );  
}
}
export default App;




*/
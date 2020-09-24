import React from 'react';
import Joi from 'joi-browser'
import Form from './common/form'

class LoginForm extends Form {
    state = {
        data:{
            username: '',
            password: ''
        },
        error:{}
  };
  schema = {
    username: Joi.string().required().label('Username'),
    password:Joi.string().required().label("Password")
  }
  
  doSubmit = () => {
    console.log('Submitted')
  }   
  
 
     render() { 
         return (
           <div className="container">
             <h1>Login</h1>
             <form onSubmit={this.formHandeler}>
               {this.renderInput('username','Username')}
               {this.renderInput('password','Password','password')}
               { this.renderButton('Login')}
             </form>
           </div>
         );
     }
 }
  
 export default LoginForm;
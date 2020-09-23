import React, { Component } from 'react';
import Input from './common/input';
class LoginForm extends Component {
    state = {
        account:{
            username: '',
            password: ''
        }
    };
     formHandeler = (e) => {
         e.preventDefault();
         
         console.log('clicked')
     }
    inputHandeller = (e) => {
        const account = { ...this.state.account }
        account[e.currentTarget.id] = e.currentTarget.value;
        this.setState({account})
     }
     render() { 
         return (
           <div className="container">
             <h1>Login</h1>
             <form onSubmit={this.formHandeler}>
               <Input
                 name="username"
                 label="Username"
                 onChange={this.inputHandeller}
                 value={this.state.account.username}
               />
               <Input
                 name="password"
                 label="Password"
                 onChange={this.inputHandeller}
                 value={this.state.account.password}
               />
               <button className="btn btn-primary">Login</button>
             </form>
           </div>
         );
     }
 }
  
 export default LoginForm;
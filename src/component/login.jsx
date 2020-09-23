import React, { Component } from 'react';
import Input from './common/input';
class LoginForm extends Component {
    state = {
        account:{
            username: '',
            password: ''
        },
        error:{}
    };
    validate = () => {
        const error = {}
        const { account } = this.state
        if (account.username.trim() === '')
            error.username = 'Username is Required'
         if (account.password.trim() === "")
            error.password = "Password is Required";
        return Object.keys(error).length===0 ? null : error
    }
     formHandeler = (e) => {
         e.preventDefault();
         const error = this.validate();
         this.setState({error})
         console.log(error)
         if (error) return
         console.log('submitted')
     }
    inputHandeller = (e) => {
        const account = { ...this.state.account }
        account[e.currentTarget.name] = e.currentTarget.value;
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
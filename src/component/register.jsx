import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import * as userService from '../services/userService'
class Register extends Form {
  state = {
    data: {
      email: "",
      password: "",
      name: "",
    },
    error: {},
  };
  schema = {
    email: Joi.string()
      .email()
      .required()
      .label("Email"),
    password: Joi.string().min(5).max(15).required().label("Password"),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = async () => {
    try {
      const response = await userService.register(this.state.data)
      localStorage.setItem('token', response.headers['x-auth-token']);
      window.location='/'
    }
    catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const error={...this.state.error}
        error.email =ex.response.data
        console.log(ex.response)
        this.setState({error})
      }
    }
  };

  render() {
    return (
      <div className="container">
        <h1>Register</h1>
        <form onSubmit={this.formHandeler}>
          {this.renderInput("email", "Email")}
          {this.renderInput("password", "Password", "password")}   
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default Register;

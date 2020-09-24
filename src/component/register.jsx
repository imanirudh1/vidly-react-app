import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

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

  doSubmit = () => {
    console.log("Registered");
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

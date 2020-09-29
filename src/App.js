import React, { Component } from 'react';
import Movies from './component/movies'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import jwtDecoder from 'jwt-decode';
import Customer from './component/customer';
import Rentals from './component/rentals';
import NotFound from './component/notFound';
import NavBar from './component/common/navBar';
import MovieForm from './component/movieForm';
import LoginForm from './component/login';
import 'react-toastify/dist/ReactToastify.css'
import Register from './component/register';
import LogOut from './component/logOut';
class App extends Component {

  state = {};

  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token')
    const user = jwtDecoder(jwt)
    this.setState({user})
    }
    catch (ex) {
      
    }
    
  }
  render() {
  const {user}=this.state
  return (

    <React.Fragment>
      <ToastContainer />
      <NavBar user={user} />
     <main className="container">
        <Switch>
          <Route path='/register' component={Register } />
          <Route path='/login' component={LoginForm} />
          <Route path='/logout' component={LogOut} />
          <Route path='/movies/:id' render={props => {
            if (!user) return <Redirect to='/login' />
            return <MovieForm {...props}/>
          }} />
      <Route path="/movies" render={props=><Movies {...props} user={user} />}/>
      <Route path="/not-found" component={NotFound}/>
      <Route path="/customer" component={Customer}/>
      <Route path="/rental" component={Rentals}/>
        <Redirect from='/' exact to='/movies' />
        <Redirect to='/not-found'/> 
        </Switch></main>
    </React.Fragment>
    );
  }
}

export default App;

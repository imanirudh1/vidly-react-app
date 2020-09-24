import React from 'react';
import Movies from './component/movies'
import { Switch,Route, Redirect} from 'react-router-dom'
import Customer from './component/customer';
import Rentals from './component/rentals';
import NotFound from './component/notFound';
import NavBar from './component/common/navBar';
import MovieForm from './component/movieForm';
import LoginForm from './component/login';
import Register from './component/register';
function App() {
  return (
     <React.Fragment>
      <NavBar/>
     <main className="container">
        <Switch>
          <Route path='/register' component={Register } />
          <Route path='/login' component={LoginForm} />
          <Route path='/movies/:id' component={MovieForm} />
      <Route path="/movies" component={Movies}/>
      <Route path="/not-found" component={NotFound}/>
      <Route path="/customer" component={Customer}/>
      <Route path="/rental" component={Rentals}/>
        <Redirect from='/' exact to='/movies' />
        <Redirect to='/not-found'/> 
        </Switch></main>
    </React.Fragment>
  );
}

export default App;

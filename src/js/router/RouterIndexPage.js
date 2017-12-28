import React , {Component} from 'react';
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';
import DashBoard from '../components/DashBoard';
import RouteComponent1 from '../components/RouteComponent1';
import ErrorPage from '../components/ErrorPage';

const Header = () => {
   return (
   <header>
      <h1>SAMPLE WORKING WEBPACK 3 APP</h1>
      <NavLink to='/' className='text-white ml-2' activeClassName='Active' exact={true}>DashBoard</NavLink>
      <NavLink to='/RouteComponent1' className='text-white ml-2' activeClassName='Active'>Sample Route Component 1</NavLink>
   </header>
   )
}

const RouterIndexPage = () => {
return (
   <BrowserRouter>
      <div>
         <Header />
         <Switch>
            <Route path='/' component={DashBoard} exact={true}/>
            <Route path='/RouteComponent1' component={RouteComponent1} />   
            <Route component={ErrorPage} />   
         </Switch>
      </div>
   </BrowserRouter>
  )
}

export default RouterIndexPage;
import React , {Component} from 'react';
import {NavLink} from 'react-router-dom';

export default class ErrorPage extends Component {
   render() {
      return (
         <NavLink to='/' className='text-white'>Go to home</NavLink>
      )
   }
} 
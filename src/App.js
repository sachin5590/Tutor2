import Navbar from './component/Navbar';
import Signup from './account/Signup';
import Login from './account/Login';
import Home from './component/Home'
import './App.css';
import React from 'react';
import {Routes,Route} from 'react-router-dom'

import Form from './component/Form';
import Employee from './component/Employee';
//import HomeContainers from './containers/homeContainers';
import { PrivateComponent } from './account/privateComponent';
function App() {


  return (
<>
<Navbar/>

<Routes>
<Route element={<PrivateComponent/>}>
  <Route path='/home' element={<Home/>}/>
 
  <Route path='/form' element={<Form/>}/> 
   <Route path='/employee' element={<Employee/>}/>

   </Route>


   <Route path='/' element={<Signup/>}/>
  <Route path='/login' element={<Login/>}/>
</Routes>

</>
  );
}

export default App;

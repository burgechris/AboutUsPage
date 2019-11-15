import React from 'react';
import NavBar from './NavBar';
import OurTeam from './OurTeam';
import { Switch, Route } from 'react-router-dom';

function App() {
 return (
  <div> 
   <NavBar/>
   <div className="row">
       <OurTeam />   
   </div>    
  </div>
 );
}

export default App;
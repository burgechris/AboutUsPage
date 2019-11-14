
import React from 'react';
import OurTeamProfile from './OurTeamProfile';

var profiles = [
 {
  name: 'Daniel Craig',
  title: 'Founder/CEO',
  bio: 'Im Bond. James Bond.'
 },


 {
  name: 'Daniel Radcliffe',
  title: 'Technical Director',
  bio: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.'
 },

 {
  name: 'Daniel Day-Lewis',
  title: 'Career Services',
  bio: 'At a certain age it just became apparent to me that this was probably the work that I would have to do.'
 },
 {
  name: 'Danny Devito',
  title: 'Head Instructor',
  bio: 'Its Always Sunny in Portland.'
 },

 {
  name: 'Danielle Fishel',
  title: 'Marketing',
  bio:  'Im Topanga.'
 },

];

function OurTeam(){
 return(

  <div className= "container" >
   <h5>Executive Team</h5>
   {profiles.map((profile, index)=>
    <OurTeamProfile name = {profile.name}
     title={profile.title}
     bio={profile.bio}
     key={index} /> 
   )}

  </div>
 );

}

export default OurTeam; 
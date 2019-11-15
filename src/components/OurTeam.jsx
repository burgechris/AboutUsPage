import React from 'react';
import OurTeamProfile from './OurTeamProfile';
import DannyCraig from '../assets/images/daniel-craig.jpg';
import DannyRadcliffe from '../assets/images/daniel-radcliffe.jpg';
import DannyDay from '../assets/images/daniel-day-lewis.jpg';
import DannyDevito from '../assets/images/danny-devito.jpeg';
import DaniFishel from '../assets/images/danielle-fishel.jpg';

var profiles = [
 {
  img: DannyCraig,   
  name: 'Daniel Craig',
  title: 'Founder/CEO',
  bio: 'Im Bond. James Bond.'
 },

 {
  img: DannyRadcliffe,   
  name: 'Daniel Radcliffe',
  title: 'Technical Director',
  bio: 'It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.'
 },

 {
  img: DannyDay,
  name: 'Daniel Day-Lewis',
  title: 'Career Services',
  bio: 'At a certain age it just became apparent to me that this was probably the work that I would have to do.'
 },
 {
  img: DannyDevito,   
  name: 'Danny Devito',
  title: 'Head Instructor',
  bio: 'Its Always Sunny in Portland.'
 },

 {
  img: DaniFishel,   
  name: 'Danielle Fishel',
  title: 'Marketing',
  bio:  'Im Topanga.'
 },

];

function OurTeam(){
 return(

  <div>
   <h5>Executive Team</h5>
   {profiles.map((profile, index)=>
    <OurTeamProfile 
     img={profile.img}
     name = {profile.name}
     title={profile.title}
     bio={profile.bio}
     key={index} /> 
   )}
  </div>
 );

}

export default OurTeam; 
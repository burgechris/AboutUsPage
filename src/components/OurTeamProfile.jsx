import React from 'react';
import PropTypes from 'prop-types';
// import  from '../assets/images/.jpg';

function OurTeamProfile(props){
 return (

  <div className="col s12 m7">
   <h2 class="header">Horizontal Card</h2>
   <div className="card horizontal">
    <div className="card-image">
     <img src="https://lorempixel.com/100/190/nature/6"/>
    </div>
    <div className="card-stacked">
     <div className="card-content">
      <h3 id="name">{props.name}</h3>
      <h4 id="name">{props.title}</h4>
      <p id="bio">{props.bio}</p>
     </div>
    </div>
   </div>
  </div>
        
        
       


 );
}

OurTeamProfile.propTypes = {
 name: PropTypes.string.isRequired,
title: PropTypes.string.isRequired,
bio: PropTypes.string.isRequired
};

export default OurTeamProfile;
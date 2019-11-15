import React from 'react';
import PropTypes from 'prop-types';

function OurTeamProfile(props){
    var cardStyle = {
        height: '500px',
        width: '400px'
    }
 return (

         <div style={cardStyle} className="col s6 s6">
             <div className="card">
                 <div className="card-image">
                     <img src={props.img}/>
                     <span className="card-title">{props.name}</span>
                    </div>
                     <div className="card-content">
                      <p id="title">{props.title}</p>
                      <p id="bio">{props.bio}</p>
                     </div>
                 </div>
             </div>

 );
}

OurTeamProfile.propTypes = {
    img:PropTypes.element,
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired
    };

export default OurTeamProfile;
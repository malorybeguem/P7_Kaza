// IMPORTS //
import React from "react";

// IMPORTING HOST INFORMATIONS //
const Host = ({ host }) => { //USING SPLIT TO GET THE HOST INFORMATIONS //
  const isHostSplited = host.name.split(" ");
  const [name, lastname] = isHostSplited; // PROVIDED PATTERN FOR SPLIT //

// IN LINE 17 - IMG IMPORT FOR HOST 
// HTML DISPLAY FOR THE HOST PART OF THE LOCATION PAGE
  return (
    <div className="host">
      <div className="host__name">
        <p className="host__firstname">{name.trim()}</p>
        <p className="host__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="host__picture" />
    </div>
  );
};

export default Host;
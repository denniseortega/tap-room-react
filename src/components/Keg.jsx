import React from "react";

function Keg(props){
  return(
    <div>
      <h3>{props.name} - {props.type}</h3>
      <p><em>3.7</em></p>
      <h3>Juice Smoothie ipa</h3>
      <hr/>
    </div>
  );
}

export default Keg;

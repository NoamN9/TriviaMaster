import React from "react";


const Navigation = () => {
  return (
   <nav style={{background:'#008080',paddingTop:'1px',display:'flex',flexDirection:'row',justifyContent:'flex-start'}}>
     <p style={{paddingRight:'5px',paddingLeft:'2px',color:'white'}}>Home</p>
     <p style={{paddingRight:'5px',color:'white'}}>About</p>
     <p style={{color:'white'}}>Register</p>
   </nav>
  );
};

export default Navigation;

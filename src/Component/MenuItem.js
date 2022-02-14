import React from "react";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> ₹{price} </p>
    </div>
  );
}

export default MenuItem;




















// import React from 'react';
// import '../style/menu.css';


// function MenuItem(props) {
//     return (
//         <>
//             <div className="cards">
//                 <div className="cardarea">
//                     <div className="cardimg">
//                         <img src={props.image} alt="" />
//                     </div>
//                     <h3>{props.name}</h3>
//                     <h6>{props.price}</h6>
//                     <button className='menubutton'>Order</button>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default MenuItem

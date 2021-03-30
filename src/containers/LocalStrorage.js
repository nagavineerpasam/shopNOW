// import React from "react";

// export const Localstorage = (props) => {
//   const cartItems = props.selected;
//   let finalCart = "";
//   if (localStorage.getItem("cartItems") != null) {
//     let stroredCart = localStorage.getItem("cartItems");
//     stroredCart = JSON.parse(stroredCart);
//     if (JSON.parse(cartItems).length > stroredCart.length) {
//       localStorage.setItem("cartItems", cartItems);
//     }

//     let final = localStorage.getItem("cartItems");
//     finalCart = JSON.parse(final);
//   } else {
//     localStorage.setItem("cartItems", cartItems);
//   }
//   return (
//     <div>
//       {finalCart.length > 0 ? (
//         <p>There are some items in the cart</p>
//       ) : (
//         <p>No items in the cart</p>
//       )}
//     </div>
//   );
// };

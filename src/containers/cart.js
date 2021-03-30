import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useLocation } from "react-router";
import { Header } from "../components/Header";
import "./cart.css";
import swal from "sweetalert";

export const Cart = () => {
  let { state } = useLocation();
  let cartItems = state;
  var total = 0;
  cartItems.map((item) => {
    total += parseInt(item.price);
    return "success";
  });

  const [Items, setItems] = useState(cartItems);

  const [Price, setPrice] = useState(total);

  const deleteItem = (id) => {
    const filteredItems = Items.filter((item) => {
      return item.id !== id;
    });
    var total = 0;
    filteredItems.map((item) => {
      total += parseInt(item.price);
      return "success";
    });
    setPrice(total);

    setItems(filteredItems);
    sweetAlert();
  };

  const sweetAlert = () => {
    swal("Deleted", "", "success");
  };

  return (
    <div>
      <Header />
      {Items.length ? (
        ""
      ) : (
        <h5 className="center">No Items..Please click on ShopNOW</h5>
      )}
      {Items.map((item) => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <p style={{ display: "inline" }}>₹{item.price}</p>
          <Button
            onClick={() => deleteItem(item.id)}
            style={{ float: "right" }}
            variant="outlined"
            color="secondary"
          >
            DELETE
          </Button>
        </ul>
      ))}
      {Price ? (
        <h3 style={{ textAlign: "center" }}>
          <Button
            style={{
              textAlign: "center",
              marginTop: "50px",
              color: "green",
              fontSize: "30px",
            }}
          >
            Total: ₹{Price}
          </Button>
        </h3>
      ) : (
        ""
      )}
    </div>
  );
};

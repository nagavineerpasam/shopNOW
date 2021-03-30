import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { ItemData } from "./Itemdata";
import { Products } from "./Products";

export const Home = () => {
  return (
    <div>
      <Header />
      <Products ItemData={ItemData} />
    </div>
  );
};

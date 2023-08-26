import React, { useState, useEffect } from "react";
import "../styles/Items.css";
import Item from "./Item";
import { InfinitySpin } from "react-loader-spinner";
import axios from "axios";
const ListItems = (props) => {
  const [items, setItems] = useState([]);
  const [spinner, setSpinner] = useState();
  const lostFoundFetch=async()=>{

  }
  useEffect(() => {

  }, []);
  return (
    <div className="container">
      {spinner && <InfinitySpin width="200" color="#019aff" />}
      
    </div>
  );
};

export default ListItems;

import React, { useState, useEffect } from "react";
import BoxItem from "./BoxItem";
import "../css/styles.css";
import { getBoxes } from "../apiUser";
export default function BoxesBoard() {
  const [boxes, setBoxes] = useState([]);
  const [max, setMax] = useState(null);

  useEffect(() => {
    const getAllboxes = async () => {
      try {
        // get all boxes of the server
        const res = await getBoxes();
        setBoxes(res);
        const newMax = res.reduce(
          (current, next) => (current > next.votes ? current : next.votes),
          0
        );
        //max Color votes
        setMax(newMax);
      } catch (err) {
        console.log(err);
      }
    };
    getAllboxes();
  }, []);

  //function max
  const changeMax = (newMax, newData) => {
    setBoxes(newData);
    setMax(newMax);
  };

  return (
    <div className="container">
      {boxes.length > 0 ? (
        boxes.map((box, index) => (
          <BoxItem key={index} box={box} max={max} changeMax={changeMax} />
        ))
      ) : (
        <h4>No box found</h4>
      )}
    </div>
  );
}

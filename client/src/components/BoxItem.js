import React, { useState, useEffect } from "react";
import "../css/styles.css";
import { votingUpdate } from "../apiUser";

export default function BoxItem(props) {
  const [box, setBox] = useState([]);
  const [max, setMax] = useState(null);
  useEffect(() => {
    setBox(props.box);
    setMax(props.max);
  }, [props.box, props.max]);

  const clicked = async () => {
    //seve the data in server
    const newVotes = box.votes + 1;
    const newData = await votingUpdate({ ...box, votes: newVotes });
    setBox({ ...box, votes: newVotes });

    if (newVotes > max) {
      props.changeMax(newVotes, newData);
    }
  };
  return (
    <div
      className="box"
      style={{ background: `${box.color}` }}
      onClick={() => clicked()}
    >
      <h1>{max}</h1>
      {box.votes !== 0 ? (
        <div
          className="votes"
          style={{ width: `${200 * (box.votes / max)}px` }}
        >
          {box.votes}
        </div>
      ) : null}
    </div>
  );
}

import React from "react";

export default function BlocksListItem(props) {
  return (
    <tr>
      <td>{props.height}</td>
      <td>{props.timestamp}</td>
      <td>{props.transactions}</td>
      <td>{props.size}</td>
      <td>{props.weight}</td>
    </tr>
  );
}

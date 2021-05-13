import React from "react";
import { Link } from "react-router-dom";
import { unixToDate } from "../utilities/helpers";

export default function BlocksListItem(props) {
  return (
    <tr>
      <td>
        <Link to={`/block/${props.height}`}>{props.height}</Link>
      </td>
      <td>{unixToDate(props.timestamp)}</td>
      <td>{props.transactions}</td>
      <td>{props.size}</td>
      <td>{props.weight}</td>
    </tr>
  );
}

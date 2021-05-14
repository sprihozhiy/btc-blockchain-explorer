import React, { useState, useEffect } from "react";
import axios from "axios";
import BlockListItem from "./BlocksListItem";

import { PROXY } from "../api/config";
import { currentUTCDate } from "../utilities/helpers";

import "./BlocksList.scss";

export default function BlocksList() {
  const [latestBlocks, setLatestBlocks] = useState([]);

  useEffect(() => {
    async function getData() {
      const URL = `${PROXY}https://chain.api.btc.com/v3/block/date/${currentUTCDate()}`;
      try {
        const res = await axios.get(URL);
        setLatestBlocks(res.data.data);
      } catch (err) {
        console.log(err, "Something went wrong");
      }
    }
    getData();
  }, []);

  return (
    <div className="BlocksList">
      <h3>Blocks</h3>
      <table className="BlocksList-Table">
        <thead>
          <tr>
            <th className="padding-left">Height</th>
            <th>Timestamp</th>
            <th>Transactions</th>
            <th>Size</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {latestBlocks.length === 0 ? (
            <tr>
              <td colSpan="3">Loading...</td>
            </tr>
          ) : (
            latestBlocks.map((block) => (
              <BlockListItem
                key={block.height}
                height={block.height}
                timestamp={block.timestamp}
                transactions={block.tx_count}
                size={block.size}
                weight={block.weight}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

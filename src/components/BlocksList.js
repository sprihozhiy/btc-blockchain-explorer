import React, { useState, useEffect } from "react";
import axios from "axios";
import BlockListItem from "./BlocksListItem";

import { currentUTCDate } from "../utilities/helpers";

export default function BlocksList() {
  const [latestBlocks, setLatestBlocks] = useState([]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  async function getData() {
    const PROXY = `https://blockchain-test-proxy.herokuapp.com/`;
    const URL = `${PROXY}https://chain.api.btc.com/v3/block/date/${currentUTCDate()}`;
    try {
      const res = await axios.get(URL);
      setLatestBlocks(res.data.data);
      setIsDataLoaded(true);
    } catch (err) {
      console.log(err, "Something went wrong");
    }
  }

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  }, [isDataLoaded]);

  return (
    <div className="BlockList">
      <h3>Blocks</h3>
      <table className="BlockList-Table">
        <thead>
          <tr>
            <th>Height</th>
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
                transactions={block.transactions}
                size={block.size}
                weight={block.weight}
              />
            ))
          )}
        </tbody>
      </table>
      <button onClick={getData}>click</button>
    </div>
  );
}

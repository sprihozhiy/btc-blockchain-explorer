import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BlockPage({ match }) {
  const {
    params: { blockHeight },
  } = match;
  const [blockData, setBlockData] = useState([]);
  const [blockTransactions, setBlockTransactions] = useState([]);

  useEffect(() => {
    async function getBlockData() {
      const PROXY = `https://blockchain-test-proxy.herokuapp.com/`;
      const URL = `${PROXY}https://chain.api.btc.com/v3/block/${blockHeight}`;
      try {
        const res = await axios.get(URL);
        setBlockData(res.data.data);
        console.log(blockData);
      } catch (err) {
        console.log(err, "Something went wrong");
      }
    }
    async function getBlockTransactions() {
      const PROXY = `https://blockchain-test-proxy.herokuapp.com/`;
      const URL = `${PROXY}https://chain.api.btc.com/v3/block/${blockHeight}/tx`;
      try {
        const res = await axios.get(URL);
        setBlockTransactions(res.data.data);
        console.log(blockTransactions);
      } catch (err) {
        console.log(err, "Something went wrong");
      }
    }
    getBlockData();
    getBlockTransactions();
  }, [blockHeight]);
  return (
    <div>
      <Link to="/">All Blocks</Link>
      <div>
        <Link to={`/block/${parseInt(blockData.height) - 1}`}>
          {parseInt(blockData.height) - 1}
        </Link>
        <span>
          <i>***</i>
          {blockData.height}
        </span>
        <Link to={`/block/${parseInt(blockData.height) + 1}`}>
          {parseInt(blockData.height) + 1}
        </Link>
      </div>
      <div className="BlockPage_General">
        <h3>General Info</h3>
        <table className="BlockPage_General_Table">
          <tbody>
            <tr>
              <td>Hash</td>
              <td>{blockData.hash}</td>
            </tr>
            <tr>
              <td>Timestamp</td>
              <td>{blockData.timestamp}</td>
            </tr>
            <tr>
              <td>Size</td>
              <td>{blockData.size}</td>
            </tr>
            <tr>
              <td>Transactions</td>
              <td>{blockData.tx_count}</td>
            </tr>
            <tr>
              <td>Total Fees</td>
              <td>{blockData.reward_fees}</td>
            </tr>
            <tr>
              <td>Subsity+Fees</td>
              <td>{blockData.reward_fees}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="BlockPage_Advanced">
        <h3>Advanced Details</h3>
        <table className="BlockPage_Advanced_Table">
          <tbody>
            <tr>
              <td>Difficulty</td>
              <td>{blockData.difficulty}</td>
            </tr>
            <tr>
              <td>Virtual Size</td>
              <td>{blockData.stripped_size}</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>{blockData.weight}</td>
            </tr>
            <tr>
              <td>Version</td>
              <td>{blockData.version}</td>
            </tr>
            <tr>
              <td>Merkle Root</td>
              <td>{blockData.mrkl_root}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h3>{blockData.tx_count} Transactions included in this block</h3>
      </div>
    </div>
  );
}

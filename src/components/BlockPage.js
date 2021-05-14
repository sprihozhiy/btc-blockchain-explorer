import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { API, PROXY } from "../api/config";
import { unixToDate, makeStringShort } from "../utilities/helpers";

import "./BlockPage.scss";
import block_liquid from "../assets/img/block_liquid.svg";

export default function BlockPage({ match }) {
  const {
    params: { blockHeight },
  } = match;
  const [blockData, setBlockData] = useState([]);
  const [blockTransactions, setBlockTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getBlockData() {
      const URL_BLOCK = `${PROXY}/${API}/${blockHeight}`;
      const URL_BLOCK_TRANSACTIONS = `${PROXY}/${API}/${blockHeight}/tx`;
      try {
        const resBlock = await axios.get(URL_BLOCK);
        const resTransactions = await axios.get(URL_BLOCK_TRANSACTIONS);
        setBlockData(resBlock.data.data);
        setBlockTransactions(resTransactions.data.data);
        console.log(blockTransactions);
        setIsLoading(true);
      } catch (err) {
        console.log(err, "Something went wrong");
      }
    }
    getBlockData();
    //eslint-disable-next-line
  }, [blockHeight]);
  return (
    <div className="BlockPage">
      <Link to="/" className="BlockPage_LinkBack">
        <i className="fas fa-long-arrow-alt-left"></i>
        <span>All Blocks</span>
      </Link>
      <div className="BlockPage_Header">
        <Link to={`/block/${parseInt(blockHeight) - 1}`}>
          <i className="fas fa-angle-left"></i>
          {parseInt(blockHeight) - 1}
        </Link>
        <span>
          <img src={block_liquid} alt="block liquid" />
          {blockHeight}
        </span>
        <Link to={`/block/${parseInt(blockHeight) + 1}`}>
          {parseInt(blockHeight) + 1}
          <i className="fas fa-angle-right"></i>
        </Link>
      </div>
      <div>
        <div className="BlockPage_General">
          <h3>General Info</h3>
          <table className="BlockPage_General_Table">
            <tbody>
              {!isLoading ? (
                <tr>
                  <td colSpan="2" className="loading">
                    Loading...
                  </td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td className="label">Hash</td>
                    <td>
                      {makeStringShort(blockData.hash)}
                      <i className="fas fa-copy"></i>
                    </td>
                  </tr>
                  <tr>
                    <td className="label">Timestamp</td>
                    <td>{unixToDate(blockData.timestamp)}</td>
                  </tr>
                  <tr>
                    <td className="label">Size</td>
                    <td>{blockData.size}</td>
                  </tr>
                  <tr>
                    <td className="label">Transactions</td>
                    <td>{blockData.tx_count}</td>
                  </tr>
                  <tr>
                    <td className="label">Total Fees</td>
                    <td>{blockData.reward_fees}</td>
                  </tr>
                  <tr>
                    <td className="label">Subsity+Fees</td>
                    <td>{blockData.reward_fees}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
        <div className="BlockPage_Advanced">
          <h3>Advanced Details</h3>
          <table className="BlockPage_Advanced_Table">
            <tbody>
              {!isLoading ? (
                <tr>
                  <td colSpan="2" className="loading">
                    Loading...
                  </td>
                </tr>
              ) : (
                <>
                  <tr>
                    <td className="label">Difficulty</td>
                    <td>{blockData.difficulty}</td>
                  </tr>
                  <tr>
                    <td className="label">Virtual Size</td>
                    <td>{blockData.stripped_size}</td>
                  </tr>
                  <tr>
                    <td className="label">Weight</td>
                    <td>{blockData.weight}</td>
                  </tr>
                  <tr>
                    <td className="label">Version</td>
                    <td>{blockData.version}</td>
                  </tr>
                  <tr>
                    <td className="label">Merkle Root</td>
                    <td>{makeStringShort(blockData.mrkl_root)}</td>
                  </tr>
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="BlockPage_Transactions">
        <h3>{blockData.tx_count} Transactions included in this block</h3>
      </div>
    </div>
  );
}

import React from 'react';
import Layout from "../components/Layout";

const BeforeStartView: React.FC = () => {
  return (
    <Layout noFooter>
    <div className="before-start-view">
      <div className="header">
        <h1>
          BEFORE <br />
          WE <span className="highlight">START</span>...
        </h1>
        <p>Let's check your Base Chain transactions and give you starting boost based on that!</p>
      </div>
      <div className="actions">
        <button className="check-txns">Check txns</button>
        <button className="skip-for-now">Skip for now</button>
      </div>
      <div className="transaction-info">
        <div className="txns-count">
          <p>MY TXNS</p>
          <span>152</span>
        </div>
        <div className="progress-bar">
          <div className="progress" style={{ width: '50%' }}></div>
          <div className="levels">
            <span>1</span>
            <span>20</span>
            <span>50</span>
            <span>100</span>
            <span>200</span>
            <span>500</span>
            <span>1000</span>
            <span>2000</span>
          </div>
          <div className="level-labels">
            <span>Bronze</span>
            <span>Gold</span>
            <span>Platinum</span>
            <span>Diamond</span>
            <span>Based</span>
          </div>
        </div>
      </div>
      <div className="claim-points">
        <button>Claim points</button>
      </div>
    </div>
    </Layout>

  );
};

export default BeforeStartView;

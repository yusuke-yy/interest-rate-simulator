import React from 'react';
import "./styles.css";

function App() {
  return (
    <>
      <div className="top-area">
        金利シミュレーター
      </div>
      <div className="input-area">
        <div className="borrowing-area">
          <div className="borrowing">借入金額</div>
          <input className="borrowing-input"/>
          <div className="yen">円</div>
        </div>
        <div className="payback-area">
          <div className="payback">返済期間</div>
          <div className="inline-block">
            <input className="payback_years-input"/>
            <input className="payback_months-input"/>
          </div>
          <div className="inline-block">
            <span className="years">年</span>
            <span className="mounths">ヶ月</span>
          </div>
        </div>
        <div className="interest-rate-area">
          <div className="interest-rate">金利</div>
          <input className="interest-rate-input"/>
          <div className="percentage">％</div>
        </div>
      </div>
    </>
  );
}

export default App;

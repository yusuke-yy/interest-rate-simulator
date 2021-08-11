import React, { useState } from 'react';
import "./styles.css";

function App() {
  const [inputBorrowing, setInputBorrowing] = useState<number>(0);
  const [inputPaybackYears, setInputPaybackYears] = useState<number>(0);
  const [inputPaybackMounths, setInputPaybackMounths] = useState<number>(0);
  const [inputInterestRate, setInputInterestRate] = useState<number>(0);
  const onChangeInputBorrowing = (e: any) => setInputBorrowing(e.target.value);
  const onChangeInputPaybackYears = (e: any) => setInputPaybackYears(e.target.value);
  const onChangeInputPaybackMounths = (e: any) => setInputPaybackMounths(e.target.value);
  const onChangeInputInterestRate = (e: any) => setInputInterestRate(e.target.value);
  const numPayBack: number = Number(inputPaybackYears)*12+Number(inputPaybackMounths);
  const percentages: number = Number(inputInterestRate)/100
  const exponentiation: number = Math.pow((1+percentages), Number(numPayBack));
  const mounthsPayback: number = Number(inputBorrowing)*(percentages)*exponentiation/(exponentiation-1);
  const numTotalPayBack: number = Number(mounthsPayback) * numPayBack;
  
  return (
    <>
      <div className="top-area">
        金利シミュレーター
      </div>
      <div className="grid">
        <div className="input-area">
          <div className="borrowing-area">
            <div className="borrowing">借入金額</div>
            <input className="borrowing-input" value={inputBorrowing} onChange={onChangeInputBorrowing} />
            <div className="yen">円</div>
          </div>
          <div className="payback-area">
            <div className="payback">返済期間</div>
            <div className="inline-block">
              <input className="payback_years-input" value={inputPaybackYears} onChange={onChangeInputPaybackYears}/>
              <input className="payback_months-input" value={inputPaybackMounths} onChange={onChangeInputPaybackMounths}/>
            </div>
            <div className="inline-block">
              <span className="years">年</span>
              <span className="mounths">ヶ月</span>
            </div>
          </div>
          <div className="interest-rate-area">
            <div className="interest-rate">金利</div>
            <input className="interest-rate-input" value={inputInterestRate} onChange={onChangeInputInterestRate}/>
            <div className="percentage">％</div>
          </div>
        </div>
        <div className="triangle"></div>
        <div className="result-area">
          <div className="total_payback-area">
            <div className="total_payback">合計返済金額</div>
            <div className="">{numTotalPayBack}円</div>
          </div>
          <div className="mounths_payback-area">
            <div className="mounths_payback">毎月返済金額</div>
            <div className="">{mounthsPayback}円</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

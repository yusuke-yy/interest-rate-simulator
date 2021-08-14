import React, { useState } from 'react';
import "./styles.css";

function App() {
  const [inputBorrowing, setInputBorrowing] = useState<number>();
  const [inputPaybackYears, setInputPaybackYears] = useState<number>();
  const [inputPaybackMounths, setInputPaybackMounths] = useState<number>();
  const [inputInterestRate, setInputInterestRate] = useState<number>();
  const onChangeInputBorrowing = (e: any) => setInputBorrowing(e.target.value);
  const onChangeInputPaybackYears = (e: any) => setInputPaybackYears(e.target.value);
  const onChangeInputPaybackMounths = (e: any) => setInputPaybackMounths(e.target.value);
  const onChangeInputInterestRate = (e: any) => setInputInterestRate(e.target.value);
  const firstinputPaybackYears = inputPaybackYears || 0;
  const firstinputPaybackMounths = inputPaybackMounths || 0;
  let numPayBack: number = Number(firstinputPaybackYears)*12+Number(firstinputPaybackMounths);
  const percentages: number = Number(inputInterestRate)/100
  const exponentiation: number = Math.pow((1+percentages), Number(numPayBack));
  const mounthsPayback: number = Number(inputBorrowing)*(percentages)*exponentiation/(exponentiation-1);
  const numTotalPayBack: number = Number(mounthsPayback) * numPayBack;
  const totalInterest: number = Number(numTotalPayBack)-Number(inputBorrowing);
  const nanTotalPayBack = (numTotalPayBack: any) => {
    if (isNaN(numTotalPayBack)) {
      return "-"
    } else {
      return Math.round(numTotalPayBack).toLocaleString()
    }
  }
  const nanMounthsPayback = (mounthsPayback: any) => {
    if (isNaN(mounthsPayback)) {
      return "-"
    } else {
      return Math.round(mounthsPayback).toLocaleString()
    }
  } 
  const nanTotalInterest = (totalInterest: any) => {
    if (isNaN(totalInterest)) {
      return "-"
    } else {
      return Math.round(totalInterest).toLocaleString()
    }
  }

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
            <div className="">{nanTotalPayBack(numTotalPayBack)}円</div>
          </div>
          <div className="mounths_payback-area">
            <div className="mounths_payback">毎月返済金額</div>
            <div className="">{nanMounthsPayback(mounthsPayback)}円</div>
          </div>
          <div className="total_interest-area">
          <div className="total_interest">総利息分</div>
          <div className="">{nanTotalInterest(totalInterest)}円</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React, { useState } from 'react';
import "./styles.css";

function App() {
  const [inputBorrowing, setInputBorrowing] = useState<number>();
  let [inputPaybackYears, setInputPaybackYears] = useState<any>();
  let [inputPaybackMounths, setInputPaybackMounths] = useState<any>();
  let [inputInterestRate, setInputInterestRate] = useState<any>();
  const onChangeInputBorrowing = (e: any) => setInputBorrowing(e.target.value);
  const onChangeInputPaybackYears = (e: any) => setInputPaybackYears(e.target.value);
  const onChangeInputPaybackMounths = (e: any) => setInputPaybackMounths(e.target.value);
  const onChangeInputInterestRate = (e: any) => setInputInterestRate(e.target.value);

  const zentohanInputBorrowing: any = (inputBorrowing: any) => {
    return String(inputBorrowing).replace(/[０-９]/g, function (s: any) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    })
  }
  const zentohanInputPaybackYears: any = (inputPaybackYears: any) => {
    return String(inputPaybackYears).replace(/[０-９]/g, function (s: any) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    })
  }
  const zentohanInputPaybackMounths: any = (inputPaybackMounths: any) => {
    return String(inputPaybackMounths).replace(/[０-９]/g, function (s: any) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    })
  }
  const zentohanInputInterestRate: any = (inputInterestRate: any) => {
    return String(inputInterestRate).replace(/[０-９]/g, function (s: any) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    })
  }

  const hankakuInputBorrowing = zentohanInputBorrowing(inputBorrowing)
  const hankakuInputPaybackYears = zentohanInputPaybackYears(inputPaybackYears)
  const hankakuInputPaybackMounths = zentohanInputPaybackMounths(inputPaybackMounths)
  const hankakuInputInterestRate = zentohanInputInterestRate(inputInterestRate)

  const limitInputBorrowing = (hankakuInputBorrowing: any) => {
    if (hankakuInputBorrowing.length > 10) {
      return hankakuInputBorrowing.slice(0,10)
    } else {
      return hankakuInputBorrowing
    }
  }
  const limitInputPaybackYears = (hankakuInputPaybackYears: any) => {
    if (hankakuInputPaybackYears.length > 2) {
      return hankakuInputPaybackYears.slice(0,2)
    } else {
      return hankakuInputPaybackYears
    }
  }
  const limitInputPaybackMounths = (hankakuInputPaybackMounths: any) => {
    if (hankakuInputPaybackMounths.length > 2) {
      return hankakuInputPaybackMounths.slice(0,2)
    } else {
      return hankakuInputPaybackMounths
    }
  }
  const limitInputInterestRate = (hankakuInputInterestRate: any) => {
    if (hankakuInputInterestRate.includes(".")) {
      return hankakuInputInterestRate.slice(0,5)
    }
    else if (hankakuInputInterestRate.length > 2) {
      return hankakuInputInterestRate.slice(0,2)
    } else {
      return hankakuInputInterestRate
    }
  }

  const limitHankakuInputBorrowing = limitInputBorrowing(hankakuInputBorrowing)
  const limitHankakuInputPaybackYears = limitInputPaybackYears(hankakuInputPaybackYears)
  const limitHankakuInputPaybackMounths = limitInputPaybackMounths(hankakuInputPaybackMounths)
  const limitHankakuInputInterestRate = limitInputInterestRate(hankakuInputInterestRate)

  const firstInputPaybackYears = limitHankakuInputPaybackYears || 0.;
  const firstInputPaybackMounths = limitHankakuInputPaybackMounths || 0;
  let numPayBack: number = Number(firstInputPaybackYears)*12+Number(firstInputPaybackMounths);
  const percentages: number = Number(limitHankakuInputInterestRate)/100
  const exponentiation: number = Math.pow((1+percentages), Number(numPayBack));
  const mounthsPayback: number = Number(limitHankakuInputBorrowing)*(percentages)*exponentiation/(exponentiation-1);
  const numTotalPayBack: number = Number(mounthsPayback) * numPayBack;
  const totalInterest: number = Number(numTotalPayBack)-Number(limitHankakuInputBorrowing);

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
  const undefinedBorrowing = (limitHankakuInputBorrowing: any) => {
    if (limitHankakuInputBorrowing === "undefined") {
      return ""
    } else {
      return limitHankakuInputBorrowing
    }
  }
  const undefinedPaybackYears = (limitHankakuInputPaybackYears: any) => {
    if (limitHankakuInputPaybackYears === "un") {
      return ""
    } else {
      return limitHankakuInputPaybackYears
    }
  }
  const undefinedPaybackMounths = (limitHankakuInputPaybackMounths: any) => {
    if (limitHankakuInputPaybackMounths === "un") {
      return ""
    } else {
      return limitHankakuInputPaybackMounths
    }
  }
  const undefinedInterestRate = (hankakuInputPaybackInterestRate: any) => {
    if (hankakuInputPaybackInterestRate === "un") {
      return ""
    } else {
      return hankakuInputPaybackInterestRate
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
            <input className="borrowing-input" value={undefinedBorrowing(limitHankakuInputBorrowing)} onChange={onChangeInputBorrowing} />
            <div className="yen">円</div>
          </div>
          <div className="payback-area">
            <div className="payback">返済期間</div>
            <div className="inline-block">
              <input className="payback_years-input" value={undefinedPaybackYears(limitHankakuInputPaybackYears)} onChange={onChangeInputPaybackYears}/>
              <input className="payback_months-input" value={undefinedPaybackMounths(limitHankakuInputPaybackMounths)} onChange={onChangeInputPaybackMounths}/>
            </div>
            <div className="inline-block">
              <span className="years">年</span>
              <span className="mounths">ヶ月</span>
            </div>
          </div>
          <div className="interest-rate-area">
            <div className="interest-rate">金利</div>
            <input className="interest-rate-input" value={undefinedInterestRate(limitHankakuInputInterestRate)} onChange={onChangeInputInterestRate}/>
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

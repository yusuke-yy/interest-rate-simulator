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
  const zentohaninputBorrowing: any = (inputBorrowing: any) => {
    return String(inputBorrowing).replace(/[０-９]/g, function (s: any) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    })
  }
  const zentohaninputPaybackYears: any = (inputPaybackYears: any) => {
    return String(inputPaybackYears).replace(/[０-９]/g, function (s: any) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    })
  }
  const zentohaninputPaybackMounths: any = (inputPaybackMounths: any) => {
    return String(inputPaybackMounths).replace(/[０-９]/g, function (s: any) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    })
  }
  const zentohaninputInterestRate: any = (inputInterestRate: any) => {
    return String(inputInterestRate).replace(/[０-９]/g, function (s: any) {
    return String.fromCharCode(s.charCodeAt(0) - 0xFEE0);
    })
  }
  const hankakuinputBorrowing = zentohaninputBorrowing(inputBorrowing)
  const hankakuinputPaybackYears = zentohaninputPaybackYears(inputPaybackYears)
  const hankakuinputPaybackMounths = zentohaninputPaybackMounths(inputPaybackMounths)
  const hankakuinputInterestRate = zentohaninputInterestRate(inputInterestRate)
  const firstinputPaybackYears = hankakuinputPaybackYears || 0.;
  const firstinputPaybackMounths = hankakuinputPaybackMounths || 0;
  let numPayBack: number = Number(firstinputPaybackYears)*12+Number(firstinputPaybackMounths);
  const percentages: number = Number(hankakuinputInterestRate)/100
  const exponentiation: number = Math.pow((1+percentages), Number(numPayBack));
  const mounthsPayback: number = Number(hankakuinputBorrowing)*(percentages)*exponentiation/(exponentiation-1);
  const numTotalPayBack: number = Number(mounthsPayback) * numPayBack;
  const totalInterest: number = Number(numTotalPayBack)-Number(hankakuinputBorrowing);
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
  const undefinedBorrowing = (hankakuinputBorrowing: any) => {
    if (hankakuinputBorrowing === "undefined") {
      return ""
    } else {
      return hankakuinputBorrowing
    }
  }
  const undefinedPaybackYears = (hankakuinputPaybackYears: any) => {
    if (hankakuinputPaybackYears === "undefined") {
      return ""
    } else {
      return hankakuinputPaybackYears
    }
  }
  const undefinedPaybackMounths = (hankakuinputPaybackMounths: any) => {
    if (hankakuinputPaybackMounths === "undefined") {
      return ""
    } else {
      return hankakuinputPaybackMounths
    }
  }
  const undefinedInterestRate = (hankakuinputPaybackInterestRate: any) => {
    if (hankakuinputPaybackInterestRate === "undefined") {
      return ""
    } else {
      return hankakuinputPaybackInterestRate
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
            <input className="borrowing-input" value={undefinedBorrowing(hankakuinputBorrowing)} onChange={onChangeInputBorrowing} />
            <div className="yen">円</div>
          </div>
          <div className="payback-area">
            <div className="payback">返済期間</div>
            <div className="inline-block">
              <input className="payback_years-input" value={undefinedPaybackYears(hankakuinputPaybackYears)} onChange={onChangeInputPaybackYears}/>
              <input className="payback_months-input" value={undefinedPaybackMounths(hankakuinputPaybackMounths)} onChange={onChangeInputPaybackMounths}/>
            </div>
            <div className="inline-block">
              <span className="years">年</span>
              <span className="mounths">ヶ月</span>
            </div>
          </div>
          <div className="interest-rate-area">
            <div className="interest-rate">金利</div>
            <input className="interest-rate-input" value={undefinedInterestRate(hankakuinputInterestRate)} onChange={onChangeInputInterestRate}/>
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

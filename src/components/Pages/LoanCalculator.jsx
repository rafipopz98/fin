// import React from "react";
import React, { useState, useEffect } from "react";
import "./LoanCalculator.css";

function LoanCalculator() {
  const [loan, setLoan] = useState(10000);
  const [duration, setDuration] = useState(1);
  const [interest, setInterest] = useState(0);
  const [dates, setDates] = useState([]);
  const getInterest = (month) => {
    let amountRepaid = loan - getPrincipal(month);
    let interestedAmount = (amountRepaid * interest) / 100;
    return Math.round((interestedAmount + Number.EPSILON) * 100) / 100;
  };

  const getPrincipal = (month) => {
    let dividedAmount = (loan / duration) * month;
    return Math.round((dividedAmount + Number.EPSILON) * 100) / 100;
  };

  const getTotalRepayment = (month) => {
    return (
      Math.round(
        (getInterest(month) + getPrincipal(month) + Number.EPSILON) * 100
      ) / 100
    );
  };

  useEffect(() => {
    let datesArray = [];

    for (let i = 1; i <= duration; i++) {
      let date = new Date();
      date = new Date(date.setMonth(date.getMonth() + 1 + i));
      datesArray.push({
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`,
        month: i,
      });
    }

    setDates(datesArray);
  }, [duration]);

  return (
    <div className="fd">
      {/* <div className="fdfirst"></div> */}
      <div className="fdsecond">
        <React.Fragment>
          <header>
            <h2>Loan Calculator</h2>
          </header>
          <main>
            <form>
              <div className="form-group">
                <label htmlFor="loan-input" className="form-label">
                  Loan Amount (£)
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="loan-input"
                  value={loan}
                  onChange={(e) => setLoan(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="duration-input" className="form-label">
                  Duration (in Months)
                </label>

                <input
                  type="text"
                  className="form-control"
                  id="duration-input"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                />
              </div>
            </form>
            <div className="form-group">
              <label htmlFor="interest-range" className="form-label">
                Interest Rate (%) : {interest}
              </label>

              <input
                type="range"
                value={interest}
                onChange={(e) => setInterest(e.target.value)}
                min="0"
                max="10"
                step="1"
                className="form-range"
                id="interest-range"
              />
              <div className="ans">

           
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Repayment Date</th>
                    <th scope="col">Principal</th>
                    <th scope="col">Interest</th>
                    <th scope="col">Total Repayment</th>
                  </tr>
                </thead>
                <tbody>
                  {dates.map((emi, index) => {
                    const { date, month } = emi;
                    return (
                      <tr key={index}>
                        <td>{date}</td>
                        <td>{getPrincipal(month)}</td>
                        <td>{getInterest(month)}</td>
                        <td>{getTotalRepayment(month)}</td>
                      </tr>
                    );
                  })}
                  <tr>
                    <td>Total</td>
                    <td>{loan}</td>
                    <td>NO MORE LOAN</td>
                    <td>NO MORE LOAN</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>
          </main>
        </React.Fragment>
      </div>
    </div>
  );
}

export default LoanCalculator;

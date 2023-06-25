// import React from "react";

import { useState } from "react";
import "./FD.css";

function FD() {
  const [totInv, setTotInv] = useState("");
  const [year, setYear] = useState("");
  const [interest, setInterest] = useState("");
  const [answer,setAnswer]=useState(0)

  return (
    <div className="fd">
      <div className="fdfirst">one</div>
      <div className="fdsecond">
        <div className="heading">
          <h2>FD CALCUALTOR</h2>
        </div>
        <div className="form-group">
          <label htmlFor="name">
            Total Investment&nbsp; &nbsp;&nbsp;:&nbsp; &nbsp; &nbsp;
          </label>
          <input
            type="number"
            id="name"
            name="name"
            value={totInv}
            onChange={(e) => setTotInv(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">
            Rate of Interest (p.a)&nbsp;:&nbsp;&nbsp;
          </label>
          <input
            type="number"
            id="interest"
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="interest">
            Time period(in years)&nbsp;:&nbsp; &nbsp;
          </label>
          <input
            type="number"
            id="year"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <input onClick={()=>{
            const qw=Number(interest+totInv)
            setAnswer(qw)
        }} type="submit" value="Calculate" />
        <div className="ans">
          <h2>ans is &nbsp;{answer}</h2>
        </div>
      </div>
    </div>
  );
}

export default FD;

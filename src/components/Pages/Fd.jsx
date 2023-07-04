import  { useState, useEffect } from 'react';
import './Fd.css'

const Fd = () => {
  const [principal, setPrincipal] = useState(1000); // Principal amount
  const [duration, setDuration] = useState(2); // Duration in years
  const [rate, setRate] = useState(2); // Interest rate
  const [earnings, setEarnings] = useState([]); // Earnings for each year

  useEffect(() => {
    const calculateEarnings = () => {
      const interestRate = rate / 100;
      let currentPrincipal = principal;
      const yearlyEarnings = [];

      for (let year = 1; year <= duration; year++) {
        const interestAmount = currentPrincipal * interestRate;
        currentPrincipal += interestAmount;
        yearlyEarnings.push({
          year: year,
          amount: interestAmount.toFixed(2),
          total: currentPrincipal.toFixed(2),
        });
      }

      setEarnings(yearlyEarnings);
    };

    calculateEarnings();
  }, [principal, duration, rate]);

  return (
    <div className='fd'>
    <div className="fdsecond">
      <h2>Fixed Deposit Calculator</h2>
      <br />  <br /><br />
      <div className="form-group">
      <label>
        Principal Amount:
      </label>
        <input
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(parseFloat(e.target.value))}
        />
      </div>
      
      <br />
      <div className="form-group">
      <label>
        Duration (years):
      </label>
        <input
          type="number"
          value={duration}
          onChange={(e) => setDuration(parseFloat(e.target.value))}
        />
      </div>
      
      <br />
      <div className="form-group">
      <label>
        Interest Rate (%):
      </label>
        <input
          type="number"
          value={rate}
          onChange={(e) => setRate(parseFloat(e.target.value))}
        />
      </div>
      
      <br />
      {earnings.length > 0 && (
        <table className='table'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Earnings</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            {earnings.map((earning) => (
              <tr key={earning.year}>
                <td>{earning.year}</td>
                <td>{earning.amount}</td>
                <td>{earning.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    </div>
  );
};

export default Fd;

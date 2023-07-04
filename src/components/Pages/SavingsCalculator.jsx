import { useState } from "react";
import "./Savings.css";

const SavingsCalculator = () => {
  const [principal, setPrincipal] = useState(10000);
  const [interestRate, setInterestRate] = useState(6);
  const [duration, setDuration] = useState(5);
  const [totalSavings, setTotalSavings] = useState(13000);
  // Add more state variables if needed

  // Define a function to handle the calculation
  const calculateSavings = () => {
    // Perform the savings calculation based on the input values
    const interest = principal * (interestRate / 100) * duration;
    const total = principal + interest;

    // Update the state with the calculation results
    setTotalSavings(total);
  };

  // Define a function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update the corresponding state variable based on the input name
    switch (name) {
      case "principal":
        setPrincipal(parseFloat(value));
        break;
      case "interestRate":
        setInterestRate(parseFloat(value));
        break;
      case "duration":
        setDuration(parseInt(value));
        break;
      // Add more cases for other input fields if needed
      default:
        break;
    }
  };

  return (
    <div className="fd">
    <div className='fdsecond'>

  
      <h2>Savings Calculator</h2>
      <div className="form-group">
        <label>Principal Amount:</label>
        <input
          type="number"
          name="principal"
          value={principal}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Interest Rate (%):</label>
        <input
          type="number"
          name="interestRate"
          value={interestRate}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <label>Duration (years):</label>
        <input
          type="number"
          name="duration"
          value={duration}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <center>

      <button className="sbtn" onClick={calculateSavings}>Calculate</button>
      </center>
      <h2 className="s-ans">Total Savings: {totalSavings}</h2>
    </div>
    </div>
  );
};

export default SavingsCalculator;

import React, { useState } from 'react';

const PaymentCalculator = () => {
  // State for input values
  const [mileage, setMileage] = useState(10000);
  const [downPayment, setDownPayment] = useState(9612);
  const [term, setTerm] = useState(39);
  const [ficoScore, setFicoScore] = useState(1);

  // Function to calculate estimated monthly payment
  const calculateMonthlyPayment = () => {
    // Formula for calculating estimated monthly payment
    // This is a simplified formula for demonstration purposes
    const listPrice = 96120; // Example list price
    const interestRate = 0.05; // Example interest rate
    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = term;
    const principal = listPrice - downPayment;
    const monthlyPayment = (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    return monthlyPayment.toFixed(2); // Rounded to two decimal places
  };

  return (
    <div>
      <h2>Estimate Monthly Payment</h2>
      <h3>Lease estimate from Porsche Financial Services</h3>
      <div>
        <h4>Step 1 of 2</h4>
        <div>
          <p>Mileage</p>
          <input type="number" value={mileage} onChange={(e) => setMileage(parseInt(e.target.value))} />
        </div>
        <div>
          <p>Down Payment</p>
          <button onClick={() => setDownPayment(downPayment - 1000)}>-</button>
          <span>${downPayment.toFixed(2)}</span>
          <button onClick={() => setDownPayment(downPayment + 1000)}>+</button>
        </div>
        <div>
          <p>Term</p>
          <input type="number" value={term} onChange={(e) => setTerm(parseInt(e.target.value))} />
        </div>
        <div>
          <p>FICO Score</p>
          <select value={ficoScore} onChange={(e) => setFicoScore(parseInt(e.target.value))}>
            <option value={1}>Level 1 (740+)</option>
            <option value={2}>Level 2 (700 - 739)</option>
            <option value={3}>Level 3 (650 - 699)</option>
            <option value={4}>Level 4 (Up to 649)</option>
          </select>
        </div>
      </div>
      <div>
        <h4>Step 2 of 2</h4>
        <p>Summary of your customized lease estimate</p>
        <p>Mileage: {mileage} mi</p>
        <p>Term: {term} months</p>
        <p>Down Payment: ${downPayment.toFixed(2)}</p>
        <p>List Price: $96,120.00</p>
        <p>Estimated Monthly Payment: ${calculateMonthlyPayment()} per month</p>
      </div>
      <p>
        The Porsche Financial Services, Inc. payment estimator tool helps you estimate the payment for finance or lease transactions for new vehicles based on the variables you enter into the tool.
      </p>
    </div>
  );
};

export default PaymentCalculator;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import ExpenseList from './components/ExpenseList/ExpenseList';

function App() {
  const expenses = [
    {
      expenseDate: new Date(2021, 1, 12),
      expenseTitle: "Raspberry Pi 4",
      expenseAmount: 35.95
    },
    {
      expenseDate: new Date(2021, 2, 28),
      expenseTitle: "LED Screen 4 inches",
      expenseAmount: 29.95
    },
    {
      id: 'e1',
      expenseTitle: 'Toilet Paper',
      expenseAmount: 94.12,
      expenseDate: new Date(2020, 7, 14),
    },
    { id: 'e2',
      expenseTitle: 'New TV',
      amount: 799.49, 
      expenseDate: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      expenseTitle: 'Car Insurance',
      expenseAmount: 294.67,
      expenseDate: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      expenseTitle: 'New Desk (Wooden)',
      expenseAmount: 450,
      expenseDate: new Date(2021, 5, 12),
    },
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ExpenseList expenses={expenses}/>     
      </header>
    </div>
  );
}

export default App;

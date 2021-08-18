import React from 'react';
import DateBlock from '../DateBlock/DateBlock';
import './ExpenseItem.css';

function ExpenseItem (props) {
    return (
        <div className="expense-item">
            <div><DateBlock date={ props.ExpenseDate } /></div>
            <div className="expense-item__description"><h2>{props.ExpenseTitle}</h2></div>
            <div className="expense-item__price">${props.ExpenseAmount}</div>
        </div>
    )
}

export default ExpenseItem;
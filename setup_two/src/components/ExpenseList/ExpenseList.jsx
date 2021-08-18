import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpenseList.css';

function ExpenseList (props) {
    return (
        <div className="expenses">
            {props.expenses.map(expense => <ExpenseItem 
                                            ExpenseDate={expense.expenseDate}
                                            ExpenseTitle={expense.expenseTitle}
                                            ExpenseAmount={expense.expenseAmount}
                                        />)}
        </div>
    )
}

export default ExpenseList;
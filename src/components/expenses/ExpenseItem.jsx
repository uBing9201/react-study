import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../../UI/Card';

const ExpenseItem = ({ title, price, date }) => {
  return (
    <Card className='circle'>
      <div className='expense-item'>
        <div>
          <ExpenseDate date={date} />
        </div>
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <div className='expense-item__price'>{price}</div>
        </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

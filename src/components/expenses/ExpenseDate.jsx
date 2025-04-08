import React from 'react';
import './ExpenseDate.css';

const ExpenseDate = ({ date }) => {
  const year = date.getFullYear();
  const month = date.getMonth();
  // padStart는 문자열의 길이를 지정하고, 난머지를 뭘로 채울지 결정
  const day = date.getDate().toString().padStart(2, '0');
  console.log(year);
  console.log(month);
  console.log(day);
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate;

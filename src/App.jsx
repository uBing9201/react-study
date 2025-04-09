import { useState } from 'react';
import './App.css';

import ExpenseItem from './components/expenses/ExpenseItem';
import NewExpense from './components/newExpense/NewExpense';
import ExpenseFilter from './components/expenses/ExpenseFilter';
import Card from './components/Ul/Card';

function App() {
  const expenses = [
    { id: 1, title: '냠냠치킨', price: 19000, date: new Date(2023, 6, 19) },
    { id: 2, title: '양파', price: 5000, date: new Date(2022, 5, 5) },
    { id: 3, title: '도미노피자', price: 35000, date: new Date(2021, 3, 21) },
    { id: 4, title: '마라탕', price: 18000, date: new Date(2024, 11, 13) },
  ];

  // 지출 객체 배열을 상태변수로 관리 (변화가 생기면 재 렌더링 대상으로 삼기 위해)
  const [expenseList, setExpenseList] = useState(expenses);

  // 선택된 연도값 상태 관리 -> 연도가 바뀌면 렌더링 다시 하기위해
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString(), // 기본값으로 현 날짜를 뽑아서 년도만 스트링으로 표시
  );
  // 자식 컴포넌트인 ExpenseFilter에게 내려줄 함수
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear); // 사용자가 선택한 연도로 상태로 변경
  };

  // 자식 컴포넌트의 데이터를 부모 컴포넌트에서 받아내는 방법 (props drilling)
  const addExpenseHandler = (newEx) => {
    const modifyEx = {
      ...newEx,
      id: expenseList.length + 1,
    };
    setExpenseList([...expenseList, modifyEx]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Card className='expenses'>
        <ExpenseFilter onChangeFilter={filterChangeHandler} />
        {expenseList
          .filter((item) => item.date.getFullYear().toString() === filteredYear)
          .map((item) => (
            <ExpenseItem
              key={item.id} // 반복문을 통해 같은 컴포넌트를 표현 할 때,
              title={item.title}
              price={item.price}
              date={item.date}
            />
          ))}
      </Card>
    </>
  );
}

export default App;

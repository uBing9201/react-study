import './App.css';

import ExpenseItem from './components/expenses/ExpenseItem';

function App() {
  const expenses = [
    { id: 1, title: '냠냠치킨', price: 19000, date: new Date(2023, 6, 19) },
    { id: 2, title: '양파', price: 5000, date: new Date(2023, 6, 20) },
    { id: 3, title: '포도', price: 20000, date: new Date(2023, 6, 21) },
    { id: 4, title: '오렌지', price: 15000, date: new Date(2023, 6, 22) },
  ];

  return (
    <>
      {expenses.map((item) => (
        <ExpenseItem
          key={item.id} // 반복문을 통해 같은 컴포넌트를 표현 할 때, 각각을 구분할 수 있게 해주는 props
          title={item.title}
          price={item.price}
          date={item.date}
        />
      ))}
    </>
  );
}

export default App;

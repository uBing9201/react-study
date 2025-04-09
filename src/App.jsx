import React, { useState } from 'react';
import CourseList from './components/CourseGoals/CourseList';
import CourseInput from './components/CourseGoals/CourseInput';
import './App.css';

const App = () => {
  // 목표 데이터들의 상태 관리 배열
  const [goals, setGoals] = useState([]);

  // CourseInput 에게 전달할 함수
  const onAddGoal = (goal) => {
    setGoals([...goals, goal]);
  };

  // CourseItem 에게 전달할 함수
  const onDelGoal = (id) => {
    // id를 통해 해당 객체를 탐색한 후 배열에서 제거
    // for (let i = 0; i < goals.length; i++) {
    //   if (goals[i].id === id) {
    //     const copyGoals = [...goals];
    //     copyGoals.splice(i, 1);
    //     setGoals(copyGoals);
    //   }
    // }
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  return (
    <div>
      <section id='goal-form'>
        <CourseInput onAdd={onAddGoal} />
      </section>
      <section id='goals'>
        <CourseList items={goals} onDelete={onDelGoal} />
      </section>
    </div>
  );
};

export default App;

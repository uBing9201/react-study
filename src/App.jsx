import React from 'react';
import CourseList from './components/CourseGoals/CourseList';
import CourseInput from './components/CourseGoals/CourseInput';
import './App.css';

const App = () => {
  return (
    <div>
      <section id='goal-form'>
        <CourseInput />
      </section>
      <section id='goals'>
        <CourseList />
      </section>
    </div>
  );
};

export default App;

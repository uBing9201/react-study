import React from 'react';
import Header from './components/Food/Layout/Header';
import AvailableMeals from './components/Food/Meals/AvailableMeals';
import Meals from './components/Food/Meals/Meals';

const App = () => {
  return (
    <div>
      <Header />
      <Meals />
    </div>
  );
};

export default App;

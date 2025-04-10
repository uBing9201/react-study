import React from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';

const App = () => {
  return (
    <>
      <MainHeader />
      <main style={{ marginTop: '6rem' }}>
        <Login />
      </main>
    </>
  );
};

export default App;

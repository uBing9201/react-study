import React, { useEffect, useState } from 'react';
import MainHeader from './components/SideEffect/MainHeader/MainHeader';
import Login from './components/SideEffect/Login/Login';
import Home from './components/SideEffect/Home/Home';

const App = () => {
  // 서버로 로그인을 요청하는 함수. (나중에 fetch등을 통해 실제로 요청이 들어간다)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = (email, password) => {
    if (email === 'abc1234@naver.com' && password === 'aaa1111') {
      // 로그인 성공
      setIsLoggedIn(true);
      // 브라우저가 제공하는 저장소 localStorage. 새로고침이나 브라우저를 종료해도 데이터가 계속 유지됨
      localStorage.setItem('login-flag', '1');
    } else {
      alert('로그인 실패');
    }
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('login-flag');
  };

  // 화면이 렌더링 될 때 localStaorage를 확인해서
  // login-flag라는 데이터가 있다면 로그인 상태를 변경하자
  useEffect(() => {
    // 이 useEffect의 콜백은 최초 렌더링 시 딱 한번만 동작해도 되는 로직.
    console.log('useEffect called in App.jsx!');

    // 화면이 렌더링 될 때 localStorage를 확인해서
    // login-flag라는 데이터 있다면 로그인 상태를 변경하자
    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') setIsLoggedIn(true);
  }, []);
  // 의존성 배열: useEffect가 실행되어야 하는 트리거 변수.
  // 배열 안에 상태 변수를 지정하면, 해당 변수의 값이 변할 때마다 useEffect가 실행되고,
  // 만약 빈 배열을 전달하면 최초 렌더링 과정에서 단 한번만 실행.

  return (
    <>
      <MainHeader isLoggedIn={isLoggedIn} onLogout={logoutHandler} />
      <main style={{ marginTop: '6rem' }}>
        {isLoggedIn && <Home />}
        {!isLoggedIn && <Login onLogin={loginHandler} />}
      </main>
    </>
  );
};

export default App;

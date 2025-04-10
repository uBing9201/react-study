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
  // 아래 상태일 경우 무한 루프 즉 한번 렌더링이 진행되어 true 로 바꾸게 되면 다시 또 렌더링을 진행하게되고 이에
  // 무한정으로 setIsLoggedIn 에 true 처리를 하게됨
  // 즉 렌더링 -> true 변경 -> 렌더링 -> true 를 다시 true로 -> 렌더링 무한 반복
  const storedLoginFlag = localStorage.getItem('login-flag');
  if (storedLoginFlag === '1') {
    setIsLoggedIn(true);
  }

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

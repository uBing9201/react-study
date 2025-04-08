import Hello from './Example';

// 함수형 컴포넌트: 최근 리액트 선언방식
function Greet() {
  return (
    <>
      <a href='https://www.naver.com'>네이버</a>
      <Hello />
    </>
  );
}

export default Greet;

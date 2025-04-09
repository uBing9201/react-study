import React, { useState } from 'react';
import './CourseInput.css';
import Button from '../../UI/Button';

const CourseInput = ({ onAdd }) => {
  const [enteredText, setEnteredText] = useState('');

  const [isValued, setIsValued] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // submit 전에 최종 입력값 검증.
    if (!enteredText.trim()) {
      setIsValued(false);
      return;
    }

    onAdd({
      id: Math.random().toString(),
      text: enteredText,
    }); //부모에게 데이터 전잘 (함수 호출)

    // 전송이 끝나면 입력창 비우기
    setEnteredText('');
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;

    // 입력값 검증
    if (inputValue.trim().length > 0) {
      setIsValued(true); // 뭐라도 작성이 되어있다면 유효하다!
    } else setIsValued(false);

    setEnteredText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={`form-control ${!isValued ? 'invalid' : ''}`}>
        <label style={{ color: isValued ? 'black' : 'red' }}>나의 목표</label>
        <input type='text' onChange={handleInput} value={enteredText} />
      </div>
      <Button type='submit'>목표 추가하기</Button>
    </form>
  );
};

export default CourseInput;

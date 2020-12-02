import { useState } from 'react';
import './App.css';

function App() {
  //[변수, 변수를 바꾸는 함수]
  //새로운 state 변수를 선언하고, val이라고 부르겠습니다
  //useState 안에 들어가는 건 변수의 초기값
  const [val, setValue] = useState('');
  //새로운 state 변수를 선언하고, state 라고 부르겠습니다
  const [state, setState] = useState([]);

  function handleOnKeyPress(e) {
    if (e.key === 'Enter') {
      handleOnSubmit();
    }
  }

  function handleOnSubmit() {
    //setState
    setState([val,...state]);
    //setValue
    setValue('');
  }

  function handleOnChange(e) {
    //setValue
    setValue(e.target.value);
  }

  function handleRemove(idx) {
    //setState(spread, slice)
    setState(
      [...state.slice(0,idx),...state.slice(idx+1)]
  );
}

return (
  <div className='App'>
    <input
      value={val}
      onChange={handleOnChange}
      onKeyPress={handleOnKeyPress}
    />
    <button type='submit' onClick={handleOnSubmit}>
      등록하기
    </button>
    {state.map((e, idx) => (
      <div key={idx}>
        <span>{e}</span>
        &nbsp;
        <button onClick={() => handleRemove(idx)}>제거</button> 
      </div>
    ))}
  </div>
);
}

export default App;
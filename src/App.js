import React, {useState} from 'react';

function App() {
  const [likes, setLikes] = useState(5);
  const [value, setValue] = useState('basic text');

  function increment() {
    setLikes(likes + 1);
  }

  function dicrement() {
    setLikes(likes - 1);
  }


  return (
    <div className="App">
      <h1>{likes}</h1>
      <h2>{value}</h2>
      <input 
        type="text" 
        value={value}
        onChange={event => setValue(event.target.value)} 
      /> 
      <button onClick={increment}>Increment</button>
      <button onClick={dicrement}>Decrement</button>
    </div>
  );
}

// onChange={event => setValue(event.target.value)}
//
// Слушатель события и колбэки для событий принимают первы параметром event у которого 
// два поля => target - сам дом элемент, а value значение которое в нём находится
// Это называет двухстороние связывание - состояние со значением в инпуте
// Подобные компоненты называются управляемыми посколько мы всегда можем 
// изменить значение этого компонента изменив состояние

export default App;

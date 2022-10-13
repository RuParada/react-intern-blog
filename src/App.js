import React, {useState} from 'react';
import Counter from "./components/Counter";

function App() {
    const [value, setValue] = useState('basic text');

    return (
      <div className="App">
        <h2>{value}</h2>
        <input 
          type="text" 
          value={value}
          onChange={event => setValue(event.target.value)} 
        />
        <Counter/>
        <Counter/>
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

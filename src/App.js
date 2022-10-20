import React, {useState, useRef} from 'react';
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import CustomButton from "./components/UI/button/CustomButton";
import CustomInput from "./components/UI/input/CustomInput";
import "./styles/App.css";

function App() {
    const [value, setValue] = useState('basic text');

    // массив обычных объектов: МОО
    const [posts, setPosts] = useState([
      {id: 1, title: 'JS', desc: 'Good language'},
      {id: 2, title: 'C#', desc: 'Good language two'}
    ]);

    const [posts2, setPosts2] = useState([
      {id: 1, title: 'TS', desc: 'Very good language'},
      {id: 2, title: 'SQL', desc: 'Very good language two'}
    ]);

    const [inputva, setInputva] = useState('any text');

    const bodyInputRef = useRef();

    const addNewPost = (e) => {
      e.preventDefault();
      console.log(inputva);
      console.log(bodyInputRef.current.value);
    }

    
    return (
      <div className="App">
        <h2 
          style={{textAlign: "center"}}
        >
          {value}
        </h2>
        <input 
          type="text" 
          value={value}
          onChange={event => setValue(event.target.value)} 
        />

        <PostList posts={posts} title="Заголовок постов 1" />
        <PostList posts={posts2} title="Заголовок постов 2" />


        <Counter/>
        <Counter/>

        <PostItem 
          post={{id:1, title: 'JS', desc: 'Good language'}} 
          value={"String EIP-2535"} 
          item={{item: 0}} 
          number={1} 
        />

        <PostItem 
          post={{id:2, title: 'Solidity', desc: 'Best language'}}
        />

        <form>
          {/* Управляемый компонент. Реализ такоеже двустороние связывание */}
          <CustomInput 
            value={inputva}
            onChange={e => setInputva(e.target.value)}
            type="text" 
            placeholder="Header post" 
          />

          {/* Неуправляемый/Неконтролируемый компонент */}
          <CustomInput 
            ref={bodyInputRef}
            type="text" 
            placeholder="Desc post"
          />

          <CustomButton disabled>Создать откл.</CustomButton>
          <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
        </form>

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
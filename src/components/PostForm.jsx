import React, {useState} from 'react';
import CustomInput from "./UI/input/CustomInput";
import CustomButton from "./UI/button/CustomButton";

const PostForm = ({posts, title}) => {
    const [post, setPost] = useState({
      title: '',
      body: ''
    });
    /* МОО преобразовываем в массив реакт элементов через map */
    return (
          <form>
            {/* Управляемый компонент. Реализ такоеже двустороние связывание */}
            <CustomInput
              value={post.title}
              onChange={event => setPost({...post, title: event.target.value})}
              type="text"
              placeholder="Header post"
            />

            <CustomInput
              value={post.body}
              onChange={event => setPost({...post, body: event.target.value})}
              type="text"
              placeholder="Desc post"
            />
            {/* Неуправляемый/Неконтролируемый компонент */}
            {/*
            <CustomInput
              ref={bodyInputRef}
              type="text"
              placeholder="Desc post"
            />
          */}

            <CustomButton disabled>Создать откл.</CustomButton>
            <CustomButton onClick={addNewPost}>Создать пост</CustomButton>
          </form>
    );
};

export default PostForm;
import React from 'react';
import classes from './CustomInput.module.css';

///const CustomInput = ({children, ...props}) => {
const CustomInput = React.forwardRef((props, ref) => {
	// Мы получаем стиль как свойство объекта
    return (
        <input ref={ref} className={classes.customInput} {...props} />
    );
});

export default CustomInput;

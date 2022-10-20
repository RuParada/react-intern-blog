import React from 'react';
import classes from './CustomButton.module.css';

const CustomButton = ({children, ...props}) => {
	// Мы получаем стиль как свойство объекта
    return (
        <button {...props} className={classes.customButton}>
            {children}
        </button>
    );
};

export default CustomButton;
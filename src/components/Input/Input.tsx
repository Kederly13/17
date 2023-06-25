import { ChangeEvent } from 'react';


import classes from './styles.module.css';

export interface IInputProps {
    type: 'text' | 'email' | 'tel' | 'search';
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string,
};

export const Input: React.FC<IInputProps> = ({ type, value, onChange, placeholder, }) => (
    <input
        className={classes.input}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);
import React,{useCallback, useState} from "react";
import styles from "./index.module.scss";

interface InputPlusProps {
   onAdd: (text: string) => void; 
}
const onClickHandler = () => {}
export const InputPlus: React.FC<InputPlusProps> = ({onAdd}) => {
    const [inputValue, setInputValue] = React.useState<string>("");
    const addTodo = () => useCallback((text: string) => {
        onAdd(inputValue);
        setInputValue("");
    }, [inputValue]);
    return (
    <div className={styles.inputPlus}>
        <input
        type="text"
        className={styles.inputPlusValue}
        value={inputValue}
        onChange={(ev)=>{
            setInputValue(ev.target.value);
        }}
        onKeyDown={(ev)=>{
            if(ev.key === "Enter"){
                addTodo();
            }
        }}
        placeholder="Плануй"
        />
        <button
        onClick={addTodo}
        aria-label="Add"
        className={styles.inputPlusButton}/>
    </div>
 );
}
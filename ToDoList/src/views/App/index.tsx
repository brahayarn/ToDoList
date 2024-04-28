import React from 'react'
import styles from './index.module.scss'
import { useToDoStore } from '../../data/stores/useToDoStore'
import { InputPlus } from '../components/InputPlus'

export const App: React.FC = () => {
  const [
    todos, 
    addTodo, 
    deleteTodo, 
    updateTodo] 
    = 
    useToDoStore(
    state => [
      state.todos,
      state.addTodo,
      state.deleteTodo,
      state.updateTodo
    ]
  )
  const OnAddHandler = (text: string) =>{
    addTodo (text)
  }
  return (
    <article className={styles.article}>
     <h1 className={styles.articleTitle}>ToDo</h1>
     <section className={styles.articleSection}>
      <InputPlus
      onAdd={OnAddHandler}/>
     </section>
     <section className={styles.articleSection}>
      {!todos.length && }
     </section>
    </article>
    )
}

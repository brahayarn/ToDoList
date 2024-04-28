import { create } from "zustand";
import { generateId } from "./helpers";
interface ToDo {
    id?: string;
    text?: string;
    createdAt?: number;
    }

interface ToDoStore {
    todos: ToDo[];
    addTodo: (text: string) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (id: string,text: string) => void;
    }
export const useToDoStore = create<ToDoStore>((set,get) => ({
    todos: [
        {
            id: generateId(),
            text: "Learn React",
            createdAt: Date.now()
        },
        {
            id: generateId(),
            text: "Learn TypeScript",
            createdAt: Date.now()
        },
        {
            id: generateId(),
            text: "Learn Zustand",
            createdAt: Date.now()
        }
    ],
    addTodo: (text) => {
        const {todos} = get();
        const newTask = {
            id: generateId(),
            text,
            createdAt: Date.now()
        };
        set({todos: [newTask].concat(todos)})
    },
    deleteTodo: (id: string) => {
        const {todos} = get();
        set({
            todos: todos.filter(todo => todo.id !== id)
        })
    },
    updateTodo: (id: string, text: string) => {
        const {todos} = get();
        set({
            todos: todos.map(todo => 
                todo.id === id 
                ? {...todo, text: text} 
                : todo
            )
        });
    }
}));
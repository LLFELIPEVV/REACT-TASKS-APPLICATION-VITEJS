import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/task";

// El context se usa para poder exportar algun dato, o funcion, etc en el que cualquier archivo sin importar la jerarquia pueda acceder a el.
export const TaskContext = createContext();

export function TaskContextProvider(props) {
    // Se usa el hook useState para declarar una constante que contendra el valor y su setter para actualizar su estado
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([
            ...tasks,
            {
                id: tasks.length,
                title: task.title,
                description: task.description,
            },
        ]);
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter((task) => task.id !== taskId));
    }

    // Se usa el hook useEffect para actualizar el valor que contiene tasks
    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider
            value={{
                tasks,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}

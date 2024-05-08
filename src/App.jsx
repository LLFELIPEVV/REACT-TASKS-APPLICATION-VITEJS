import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { tasks as data } from "./task";
import { useState, useEffect } from "react";

function App() {
    // Se usa el hook useState para declarar una constante que contendra el valor y su setter para actualizar su estado
    const [tasks, setTasks] = useState([]);

    // Se usa el hook useEffect para actualizar el valor que contiene tasks
    useEffect(() => {
        setTasks(data);
    }, []);

    function createTask(task) {
        setTasks([...tasks, task]);
    }

    return (
        <>
            <TaskForm createTask={createTask} />
            <TaskList tasks={tasks} />
        </>
    );
}

export default App;

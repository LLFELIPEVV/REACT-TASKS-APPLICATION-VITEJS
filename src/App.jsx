import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { tasks as data } from "./data/task";
import { useState, useEffect } from "react";

function App() {
    // Se usa el hook useState para declarar una constante que contendra el valor y su setter para actualizar su estado
    const [tasks, setTasks] = useState([]);

    // Se usa el hook useEffect para actualizar el valor que contiene tasks
    useEffect(() => {
        setTasks(data);
    }, []);

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

    return (
        <>
            <TaskForm createTask={createTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} />
        </>
    );
}

export default App;

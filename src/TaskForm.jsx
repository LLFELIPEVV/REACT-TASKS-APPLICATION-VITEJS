import { useState } from "react";
import { tasks } from "./task";

function TaskForm({ createTask }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        // Cancela el comportamiento por defecto
        e.preventDefault();
        const newTask = {
            id: ((tasks[tasks.length - 1].id) + 1),
            title: title,
            description: description
        }
        console.log(newTask)
        //createTask(title);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                placeholder="Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                placeholder="Escribe tu descripcion"
                onChange={(e) => setDescription(e.target.value)}
            />
            <button>Guardar</button>
        </form>
    );
}

export default TaskForm;

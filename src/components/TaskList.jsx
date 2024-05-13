import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

// Este es el componente que esta siendo importado en App.jsx
function TaskList() {
    const { tasks } = useContext(TaskContext);
    if (tasks.length === 0) {
        return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
    }

    return (
        <div className="grid grid-cols-4 gap-2">
            {tasks.map(
                (
                    task // map para hacerlo en cada elemento de la lista
                ) => (
                    <TaskCard key={task.id} task={task} />
                )
            )}
        </div>
    );
}

export default TaskList;

import TaskCard from "./TaskCard";

// Este es el componente que esta siendo importado en App.jsx
function TaskList({ tasks, deleteTask }) {
    if (tasks.length === 0) {
        return <h1>No hay tareas aun</h1>;
    }

    return (
        <div>
            {tasks.map(
                (
                    task // map para hacerlo en cada elemento de la lista
                ) => (
                    <TaskCard key={task.id} task={task} deleteTask={deleteTask}/>
                )
            )}
        </div>
    );
}

export default TaskList;

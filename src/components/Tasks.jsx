import { useEffect, useState } from "react"
import axios from 'axios'
import { toast } from 'react-toastify';

import './Tasks.scss';

import TaskItem from './TaskItem'
import AddTask from "./AddTaks";

const Tasks = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTasks(data);
        } catch (_error) {
            toast.error("Wasn´t possible recover tasks.")
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="tasks-container">
            <h2>My Tasks</h2>

            <div className="last-tasks">
                <h3>Last Tasks</h3>
                <AddTask fetchTasks={fetchTasks}/>
                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted === false).map((lastTask) => (
                     <TaskItem task={lastTask} fetchTasks={fetchTasks}/>
                    ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Completed Tasks</h3>
                <div className="tasks-list">
                    {tasks.filter(task => task.isCompleted).map((completedTask) => (
                     <TaskItem task={completedTask} fetchTasks={fetchTasks}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tasks;

import { useState } from 'react';
import { FaPlus } from 'react-icons/fa'
import axios from 'axios'
import { toast } from 'react-toastify';

import CustomInput from './CustomInput';
import CustomButton from './CustomButton';

import './AddTask.scss';

const AddTask = ({ fetchTasks }) => {
    const [task, setTask] = useState("")

    const onChange = (e) => {
        setTask(e.target.value);
    }

    const handleTaskAddition = async () => {
        try {
            if (task.length === 0) {
                return toast.error("Something wrong!")
            }

            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false
            });

            await fetchTasks();

            setTask("");

            await toast.success("Task added with success!")

        } catch(_error) {
            return toast.error("Something wrong!")
        }

    }

    return (
        <div className="add-task-container">
            <CustomInput label="Adicionar tarefa..." 
            value={task} 
            onChange={onChange}
            onEnterPress={handleTaskAddition}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="white"/>
            </CustomButton>       
        </div>
    )
}

export default AddTask;
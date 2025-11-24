import { useState } from "react"
import TaskItem from "./components/TaskItem";

const App = () => {

  const [tasks, setTask] = useState([
    {
      id: '1',
      description: "Study",
      isCompleted: false

    },
    {
      id: '2',
      description: "Read",
      isCompleted: true

    },
  ]);

  return (
    <>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task}/>
        ))}
    </>
  );

};

export default App;
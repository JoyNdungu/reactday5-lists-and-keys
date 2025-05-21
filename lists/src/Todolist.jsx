import {useState} from 'react'

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim () === '')return;

    const newItem = {
      id:Date.now(),
      text:newTask
    };
    setTasks (prev => [...prev, newItem ]); 
    setNewTask('')
  }
  return (
    <div>
      
    </div>
  )
}

export default Todolist

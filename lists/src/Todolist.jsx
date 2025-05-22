import {useState} from 'react'

const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim () === '')return;

    const newItem = {
      id: Date.now(),
      text:newTask
    };
    setTasks (prev => [...prev, newItem ]); 
    setNewTask('')
  };
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div>
      <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)} placeholder="Enter task">
      </input>
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.text}
          <button onClick={() => handleDelete(task.id)}>❌</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Todolist

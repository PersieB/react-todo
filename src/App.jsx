import { useState } from 'react'

// custom components
import CustomForm from './components/CustomForm'
import TaskList from './components/TaskList'
import EditForm from './components/EditForm'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks(prevState => [...prevState, task]);
  }

  const deleteTask = (id) => {
    setTasks(prevState => prevState.filter(t => t.id != id));
  }

  const tooggleTask = (id) => {
    setTasks(prevState => prevState.map(t => (t.id = id ? {... t, checked: !t.checked}: t)))
  }

  return (
      <div className='container'>
        <header>
          <h1> My Todo Tasks </h1>
        </header>
        <EditForm />
        <CustomForm addTask={addTask}/>
        {tasks && (
        <TaskList tasks={tasks} deleteTask = {deleteTask} tooggleTask={tooggleTask}/>
        )}
      </div>

  )
}
export default App

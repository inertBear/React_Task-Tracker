import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
    const [showAddTask, setShowAddTask] = useState(false)

    const [tasks, setTasks] = useState([
       {
           id: 1,
           text: 'Doctors Appointment',
           day: 'Feb 5th at 2:30pm',
           reminder: true,
       },
       {
           id: 2,
           text: 'Meeting at School',
           day: 'Feb 6th at 1:30pm',
           reminder: true,
       },
       {
           id: 3,
           text: 'Food Shopping',
           day: 'Feb 5th at 2:30pm',
           reminder:false,
       }
    ])

    //Add Task (save task)
    const addTask= (task) => {
        // generate a random task id
        const id = Math.floor(Math.random() * 10000) + 1
        console.log('add new task', id)
        const newTask = {id, ...task }
        setTasks([...tasks, newTask])
        //make request to backed to add task
    }

    //Delete Task (red x)
    const deleteTask = (id) => {
        console.log('delete task', id)
        setTasks(tasks.filter((task) => task.id !== id))
        // make request to backend to delete task
    }

    //Toggle Reminder (double click)
    const toggleReminder = (id) => {
        console.log('toggle reminder for', id)
        setTasks(tasks.map((task) => task.id === id ? {...task, reminder:
            !task.reminder } : task)
        )
        //make request to backend to toggle reminder for task
    }

  return (
  // JSX
  // can only have 1 top level element here
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddDialog={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ?
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          />
          : 'No Tasks'
      }
    </div>
  )
}

export default App;

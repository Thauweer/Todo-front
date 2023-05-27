import ClockSection from './screens/ClockSection'
import TodoSection from './screens/TodoSection'
import SheduleSection from './screens/SheduleSection'

import TodoModal from './components/modals/TodoModal'
import AuthModal from './components/modals/AuthModal'
import { getAllTodo } from './api/Todo.api'
import { useEffect, useState } from 'react'
import { ITodo } from './interfaces/ITodo'
import useTypedSelector from './hooks/useTypedSelector'


function App() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const {user} = useTypedSelector(state => state.app)

  const updateTodos = () => {
    getAllTodo().then(todos => setTodos(todos))
  }

  useEffect(()=>{
    updateTodos()
  }, [user])
  
  return (
    <div className="App">
      <TodoModal updateTodos={updateTodos}/>
      <AuthModal updateTodos={updateTodos}/>
      <div className="wrap flex flex-row h-screen dark:bg-dark-gray dark:text-white bg-light-beige py-5 px-10">
        <ClockSection />
        <div className="wrap flex flex-row w-full mx-5">
          <TodoSection todos={todos} updateTodos={updateTodos}/>
          <SheduleSection />
        </div>
      </div>
    </div>
  )
}

export default App
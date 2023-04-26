import ClockSection from './screens/ClockSection'
import TodoSection from './screens/TodoSection'
import SheduleSection from './screens/SheduleSection'

import TodoModal from './components/modals/TodoModal'
import AuthModal from './components/modals/AuthModal'

import { useGetAllTodoMutation } from './features/api/todo.api'

function App() {
  const [ getAllTodo, result] = useGetAllTodoMutation({
    fixedCacheKey: 'get_all_todos'
  })
  
  return (
    <div className="App">
      <TodoModal updateTodos={() => getAllTodo('')}/>
      <AuthModal updateTodos={() => getAllTodo('')}/>
      <div className="wrap flex flex-row h-screen dark:bg-dark-gray dark:text-white bg-light-beige py-5 px-10">
        <ClockSection />
        <div className="wrap flex flex-row w-full mx-5">
          <TodoSection />
          <SheduleSection />
        </div>
      </div>
    </div>
  )
}

export default App
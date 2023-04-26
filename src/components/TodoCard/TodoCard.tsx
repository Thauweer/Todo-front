import { ITodo } from '@/interfaces/ITodo'
import { BsTrash } from 'react-icons/bs'
import { BsPen } from 'react-icons/bs';

import useAction from "@/hooks/useAction";

import './TodoCard.css'
import { useDeleteTodoMutation } from '@/features/api/todo.api';

type Props = {
  todo: ITodo,
  updateTodos: () => void
}

const TodoCard = ({ todo, updateTodos }: Props) => {
  const [deleteTodo, result] = useDeleteTodoMutation({})
  const { setTodo, toggleShowUpdateTodoModal } = useAction()

  const deleteTodoClickHandler = () =>{
    deleteTodo(todo.id).then(() => updateTodos())
  }

  const updateTodoClickHanler = () => {
    setTodo(todo)
    toggleShowUpdateTodoModal()
  }

  return (
    <article className="Todo">
      <div>
        <div>
          <h1>
            {todo.title}
          </h1>
          <span>
            {todo.planned_time}
          </span>
        </div>
        <p> {todo.description} </p>
      </div>
      <span>
        <button onClick={deleteTodoClickHandler}>
          <BsTrash />
        </button>
        <button onClick={updateTodoClickHanler}>
          <BsPen/>
        </button>
      </span>
    </article>
  )
}

export default TodoCard


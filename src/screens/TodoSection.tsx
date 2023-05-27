import SectionWrap from '@/components/SectionWrap/SectionWrap'
import Button from '@/components/Button/Button'

import useAction from '@/hooks/useAction'
import TodoCard from '@/components/TodoCard/TodoCard'

import { ITodo } from '@/interfaces/ITodo'

type Props = {
  todos: ITodo[],
  updateTodos: () => void
}

const TodoSection = (props: Props) => {
  const { toggleShowCreateTodoModal: toggleShowTodo } = useAction()

  return (
    <div className="wrap md:w-3/4 w-full h-full">
      <SectionWrap>
        <div className={`wrap ${props.todos.length == 0 ? 'h-full grid place-items-center' : 'flex'}`}>
          <div className={`wrap mt-5 mr-5 w-full flex ${props.todos.length == 0 ? 'justify-center' : 'justify-end'}`}>
            <Button handler={() => toggleShowTodo()}>Добавить задачу</Button>
          </div>

        </div>
        {props.todos.map(todo => {
          return (<TodoCard key={todo.id} todo={todo} updateTodos={props.updateTodos} />)
        })}
      </SectionWrap>
    </div>
  )
}

export default TodoSection
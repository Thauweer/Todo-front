import SectionWrap from '@/components/SectionWrap/SectionWrap'
import Button from '@/components/Button/Button'

import useAction from '@/hooks/useAction'
import TodoCard from '@/components/TodoCard/TodoCard'

import { useGetAllTodoMutation } from '@/features/api/todo.api'
import useTypedSelector from '@/hooks/useTypedSelector'
import { useEffect } from 'react'

type Props = {}

const TodoSection = (props: Props) => {
  const { toggleShowCreateTodoModal: toggleShowTodo } = useAction()
  const { user } = useTypedSelector(state => state.app)
  const [ getAllTodo, result] = useGetAllTodoMutation({
    fixedCacheKey: 'get_all_todos'
  })

  useEffect(() =>{
    getAllTodo('')
  }, [])

  return (
    <div className="wrap md:w-3/4 w-full h-full">
      <SectionWrap>
        <div className={`wrap ${result.data?.length == 0 ? 'h-full grid place-items-center' : 'flex'}`}>
          <div className={`wrap mt-5 mr-5 w-full flex ${result.data?.length == 0 ? 'justify-center' : 'justify-end'}`}>
            <Button handler={() => toggleShowTodo()}>Добавить задачу</Button>
          </div>

        </div>
        { result.data?.map(todo => {
          return (<TodoCard key={todo.id} todo={todo} updateTodos={() => getAllTodo('')}/>)
        })}
      </SectionWrap>
    </div>
  )
}

export default TodoSection
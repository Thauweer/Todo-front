import React, { useRef, useEffect, FC } from 'react'
import TextInput from '../TextInput/TextInput'
import TextArea from '../TextArea'
import Button from '../Button/Button'
import ModalWrap from './ModalWrap'

import useTypedSelector from '@/hooks/useTypedSelector'
import useAction from '@/hooks/useAction'
import { createTodo, updateTodo } from '@/api/Todo.api'

type Props = {
    updateTodos: () => void
}

const TodoModal:FC<Props> = ({updateTodos}) => {
    const { showTodoModal, 
        todoModalOption, 
        todoModal } = useTypedSelector(state => state.app)
    const { closeTodoModal,
        setTitleTodo,
        setPlannedTimeTodo,
        setDescTodo,
        clearTodoModal } = useAction()
    const { app } = useTypedSelector(state => state)

    const checkTodoArgs = () => (!!app.todoModal.title && !!app.todoModal.description)
    
    const clickCreateHandler = () => {
        if(!checkTodoArgs()){
            return
        }

        createTodo(app.todoModal).then(() => updateTodos())
        clearTodoModal()
        closeTodoModal()
    }

    const clickUpdateHandler = () => {
        if(!checkTodoArgs()){
            return
        }

        updateTodo(app.todoModal).then(() => updateTodos())
        clearTodoModal()
        closeTodoModal()
    }

    return (
        <ModalWrap isShow={showTodoModal} showModal={closeTodoModal}>
            <div className="flex flex-col">
                <TextInput value={todoModal.title} handler={setTitleTodo} placeholder='Введите заголовок для задачи' />
                <TextArea value={todoModal.description} handler={setDescTodo} placeholder='Введите описание для задачи' />
                <div className="wrap">
                    <span>Введите время:</span>
                    <input type="time" onChange={e => setPlannedTimeTodo(e.target.value)} className="w-min ml-5" />
                </div>
            </div>
            <div className="wrap flex mt-5 justify-end">
                <Button handler={() => { todoModalOption === 0 ? clickCreateHandler() : clickUpdateHandler()}}>{todoModalOption === 0 ? 'Добавить' : 'Обновить'}</Button>
            </div>
        </ModalWrap>)
}

export default TodoModal
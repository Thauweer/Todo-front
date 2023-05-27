import { FC, useEffect, useState } from 'react'

import ModalWrap from './ModalWrap'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'

import useTypedSelector from '@/hooks/useTypedSelector'
import useAction from '@/hooks/useAction'

import { login, registration, response } from '@/api/Authorization.api'

type Props = {
    updateTodos: () => void
}

const AuthModal: FC<Props> = (props: Props) => {
    const { showAuthModal, user } = useTypedSelector(state => state.app)
    const { toggleShowAuth: showAuth, setLogin, setPassword, setName, setToken, clearLoginAndPassword } = useAction()
    const [resultQuery, setResultQuery] = useState<response>()
    const [isLoginRequest, setIsLoginRequest] = useState(true)

    const handleLoginClick = () => {
        const request = isLoginRequest ? login : registration
        if (user.login && user.password) {
            request(user.login, user.password).then(data => {
                setResultQuery(data)
                setName(data.username)
                setToken(data.token)
                props.updateTodos()
            })
        }
    }

    useEffect(() => {
        if (resultQuery) {
            clearLoginAndPassword()
            setTimeout(showAuth, 2000)
        }
    }, [resultQuery])

    return (
        <ModalWrap isShow={showAuthModal} showModal={showAuth}>
            <div className="dark:text-white flex flex-row justify-between">
                <h1 onClick={() => setIsLoginRequest(true)} className={`${isLoginRequest ? 'underline' : ''}  cursor-pointer`}>
                    Вход
                </h1>
                <h1 onClick={() => setIsLoginRequest(false)} className={`${!isLoginRequest ? 'underline' : ''} cursor-pointer`}>
                    Регистрация
                </h1>
            </div>
            <TextInput placeholder='Введите логин:' handler={setLogin} value={user.login} />
            <TextInput placeholder='Введите пароль:' handler={setPassword} value={user.password} />
            <div className='flex justify-end mt-4'>
                <Button handler={handleLoginClick}>Войти</Button>

            </div>
            {
                user.name ?
                    (<p className='mt-4'>
                        {"Добро пожаловать, " + user.name}
                    </p>) : null
            }
        </ModalWrap>
    )
}

export default AuthModal
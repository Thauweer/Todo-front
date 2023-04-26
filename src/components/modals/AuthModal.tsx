import { FC, useEffect, useState } from 'react'

import ModalWrap from './ModalWrap'
import TextInput from '../TextInput/TextInput'
import Button from '../Button/Button'

import useTypedSelector from '@/hooks/useTypedSelector'
import useAction from '@/hooks/useAction'

import { login, registrate, response } from '@/auth/Authentification'

type Props = {
    updateTodos: () => void
}

const AuthModal:FC<Props> = (props:Props) => {
    const { showAuthModal, user } = useTypedSelector(state => state.app)
    const { toggleShowAuth: showAuth, setLogin, setPassword, setName, setToken, clearLoginAndPassword } = useAction()
    const [resultQuery, setResultQuery] = useState<response>()
    
    const handleLoginClick = () => {
        if (user.login && user.password) {
            login(user.login, user.password).then(data => {
                setResultQuery(data)
                setName(data.username)
                setToken(data.access_token)
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
            <TextInput placeholder='Введите логин:' handler={setLogin} value={user.login}/>
            <TextInput placeholder='Введите пароль:' handler={setPassword} value={user.password}/>
            <div className='flex justify-end mt-4'>
            <Button handler={handleLoginClick}>Войти</Button>

            </div>
            {
                resultQuery ?
                    (<p className='mt-4'>
                        {"Добро пожаловать, " + resultQuery.username}
                    </p>) : null
            }
        </ModalWrap>
    )
}

export default AuthModal
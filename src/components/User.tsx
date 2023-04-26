import Button from './Button/Button'
import { TbDoorEnter } from 'react-icons/tb'
import { FaUserAlt } from 'react-icons/fa'


import useTypedSelector from '@/hooks/useTypedSelector'
import useAction from '@/hooks/useAction'

const User = () => {
  const { user } = useTypedSelector(state => state.app)
  const { toggleShowAuth: showAuth } = useAction()

  return (
    <div className='w-full flex justify-center mt-5'>
      {user.name ?
        (<span className='flex row items-center gap-1.5'>
          <FaUserAlt />
          {user.name}
          </span>)
          :
          (<Button handler={showAuth}>
            <span className='flex row items-center gap-1.5'>
              Войти
              <TbDoorEnter />
            </span>
          </Button>)
      }
        </div>
        )
}

      export default User
import Button from './Button/Button'
import { TbDoorEnter } from 'react-icons/tb'
import { FaUserAlt } from 'react-icons/fa'
import { GiEntryDoor } from 'react-icons/gi'
import { BsGearWide } from 'react-icons/bs'


import useTypedSelector from '@/hooks/useTypedSelector'
import useAction from '@/hooks/useAction'
import useOutside from '@/hooks/useOutsideClick'
import { useState } from 'react'


const User = () => {
  const { user } = useTypedSelector(state => state.app)
  const { toggleShowAuth: showAuth, logout } = useAction()
  const [open, setOpen] = useState(false)
  const ref = useOutside<HTMLDivElement>(() => setOpen(false))

  return (
    <div className='w-full flex justify-center mt-5'>
      {user.name ?
        (<>
          <span onClick={e => { setOpen(state => { console.log(state);return !state}); e.stopPropagation();  }} className='flex row items-center gap-1.5 cursor-pointer z-10'>
            <FaUserAlt />
            {user.name}
          </span>
          {open ? (<div ref={ref} className='absolute left translate-x-24 bg-light-beige py-2 px-3 rounded-md dark:bg-dark-liver leading-8'>
            Настройки <BsGearWide className='inline-block' />
            <br />
            <span onClick={() => logout()}>
              Выйти. <GiEntryDoor className='inline-block' />
            </span>
          </div>) : null}
        </>) :
        (<Button handler={showAuth}>
          <span className='flex row items-center gap-1.5'>
            Войти
            <TbDoorEnter />
          </span>
        </Button>)
      }
    </div >
  )
}

export default User
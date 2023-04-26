import { Children, ReactNode } from 'react'

import  './Button.css'

type Props = {
    handler: () => void,
    children: ReactNode | undefined
}

const Button = (props: Props) => {
  return (
    <button onClick={()=> props.handler()} className='Button'>{props.children}</button>
  )
}



export default Button
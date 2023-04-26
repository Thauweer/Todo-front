import useOutside from '@/hooks/useOutsideClick'
import React, { ReactFragment, useEffect } from 'react'

type Props = {
    children: ReactFragment,
    showModal: () => void,
    isShow: boolean,
}

const ModalWrap = (props: Props) => {
    const ref = useOutside<HTMLDivElement>(props.showModal)

    return props.isShow ? (
        <div className="absolute h-screen w-screen z-50 bg-black-opac" >
            <div ref={ref} className='absolute  dark:bg-dark-gray bg-alto py-5 px-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                {props.children}
            </div>
        </div >) : null
}

export default ModalWrap
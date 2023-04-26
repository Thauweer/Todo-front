import { ReactNode, FC } from 'react'

import './SectionWrap.css'

type Props = {
    children: ReactNode
}

const SectionWrap:FC<Props> = ({children}) => {
    return (
        <section className="SectionWrap">
            {children}
        </section>
    )
}

export default SectionWrap
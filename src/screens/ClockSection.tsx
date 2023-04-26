import { useState } from 'react'

import SwitchThemeButton from '@/components/SwitchThemeButton'
import User from '@/components/User'

type Props = {}

const ClockSection = (props: Props) => {
    const [time, setTime] = useState(new Date(Date.now()))
    setTimeout(() => {
        setTime(new Date(Date.now()))
    }, 1000)
    return (
        <section className="clock w-min">
            <div className="text-xl font-semibold text-center">
                {time.getHours()}:{time.getMinutes()}
                <br/>
                {time.toLocaleString('default', { month: 'long' })}, {time.getDate()}
            </div>
            <User/>
            <SwitchThemeButton/>
        </section>
    )
}

export default ClockSection
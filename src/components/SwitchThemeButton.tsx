import { useState, memo } from 'react'
import { BsFillMoonStarsFill, BsSun } from 'react-icons/bs'

const SwitchThemeButton = memo(() => {
    const [dark, setDark] = useState(document.documentElement.classList.contains('dark'))

    const clickHandler = () => {
        if (dark) {
            document.documentElement.classList.remove('dark')
            setDark(state => !state)
        } else {
            document.documentElement.classList.add('dark')
            setDark(state => !state)
        }
    }

    return (
        <div className="w-full flex justify-center mt-5 cursor-pointer" onClick={clickHandler}>
            {dark ?  <BsSun size={24}/> : <BsFillMoonStarsFill size={24}/> }
        </div>
    )
})

export default SwitchThemeButton
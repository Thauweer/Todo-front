import { FC } from 'react'

import './TextInput.css'

type Props = {
    placeholder: string,
    handler: (value: string) => {},
    type?: string,
    value: string
}

const TextInput: FC<Props> = ({ placeholder, handler, type = 'text', value }) => {
    return (
        <div className="Input">
            <div>
                <input
                    value={value}
                    type={type}
                    id="exampleFormControlInput1"
                    onChange={(e) => { handler(e.target.value) }}
                    placeholder={placeholder}/>
            </div>
        </div>
    )
}

export default TextInput
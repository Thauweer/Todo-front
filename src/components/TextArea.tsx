type Props = {
    placeholder: string,
    handler: (value: string) => {},
    value: string
}

const TextArea = (props: Props) => {
    return (
        <div className="relative mb-3 w-full" data-te-input-wrapper-init>
            <textarea
                value={props.value}
                className="min-h-[auto] w-full rounded border-0 py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear placeholder:text-xs motion-reduce:transition-none dark:bg-semi-dark-gray dark:text-light-gray dark:placeholder:text-light-gray"
                onChange={(e) => { props.handler(e.target.value) }}
                placeholder={props.placeholder}>
            </textarea>
        </div>
    )
}

export default TextArea
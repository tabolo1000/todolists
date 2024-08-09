import { useState, KeyboardEvent } from "react";

type InputProps = {
    onClick: (title: string) => void,
    title: string
}

export const SpanInputItem = ({
    onClick,
    title,

}: InputProps) => {
    const [newTitle, setTitle] = useState<string>('');
    const [activeInput, setActiveInput] = useState<boolean>(false);

    /* ----handlers----- */
    const onBlurSetTitleHandler = () => {
        onClick(newTitle);
        setActiveInput(!activeInput)
    }
    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onBlurSetTitleHandler()
        }

    }
    return (

        (activeInput)
            ? <input
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                onBlur={onBlurSetTitleHandler}
                onKeyDown={(e) => onKeyHandler(e)}
                type="text"
                placeholder="Puting your title!" />
            : <span
                onDoubleClick={setActiveInput.bind({}, !activeInput)}
            >{title}</span>
    )

}
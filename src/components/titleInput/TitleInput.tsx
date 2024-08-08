import { ChangeEvent, FC, useState, KeyboardEvent } from "react"

type TitleInputProps = {
    onAddTaskInput: (title: string) => void;
}

export const TitleInput: FC<TitleInputProps> = ({
    onAddTaskInput,
}) => {
    const [title, setTitle] = useState<string>('')

    const handlerTypingTitle = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value){
            setTitle(e.target.value)
        }
        
        
    }
    const onClickHandler = () => {
        if (title.trim()) {
            setTitle("");
            onAddTaskInput(title)
        }
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            onClickHandler()
        }
        
    }

    return (
        <div>
            <input
                placeholder="Put your title!"
                onChange={(e) => handlerTypingTitle(e)}
                onKeyDown={e => onKeyHandler(e)}
                value={title}
                type="text" />
            <button
                disabled={!title}
                onClick={onClickHandler}
            >+</button>
        </div>
    )
}
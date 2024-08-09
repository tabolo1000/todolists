import { ChangeEvent, FC, useState, KeyboardEvent } from "react"

type TitleInputProps = {
    onClick: (title: string) => void;
}

export const TitleInput: FC<TitleInputProps> = ({
    onClick,
}) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handlerTypingTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setError("")
        setTitle(e.target.value)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickHandler()
        }

    }


    const onClickHandler = () => {
        const correctTitle = title.trim()
        if (!correctTitle) {
            setError("Your title have only spaces!")
        }
        if (correctTitle) {
            setTitle("");
            onClick(title)
        }
    }

    return (
        <div>
            <input
                autoFocus={false}
                placeholder="Put your title!"
                onChange={(e) => handlerTypingTitle(e)}
                onKeyDown={e => onKeyHandler(e)}
                value={title}
                type="text"
                style={error ? { border: "2px solid red" } : {}}
            />
            <button
                disabled={!title}
                onClick={onClickHandler}
            >+</button>
            <div>
                {(error && <span style={{ color: "red" }}>{error}</span>)}
            </div>

        </div>
    )
}
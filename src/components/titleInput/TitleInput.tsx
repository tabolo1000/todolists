import { Button, TextField } from "@mui/material";
import { ChangeEvent, FC, useState, KeyboardEvent } from "react"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


type TitleInputProps = {
    onClick: (title: string) => void;
}

export const TitleInput: FC<TitleInputProps> = ({
    onClick,
}) => {
    const [title, setTitle] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const handlerTypingTitle = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setError("")
        setTitle(e.target.value)
    }

    const onKeyHandler = (e: KeyboardEvent<HTMLDivElement>) => {
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
            <TextField
                label="Type title!"
                size="small"
                error={error ? true: false}
                autoFocus={false}
                onChange={(e) => handlerTypingTitle(e)}
                onKeyDown={e => onKeyHandler(e)}
                value={title}
                type="text"
                helperText={error}
            />
            <Button
                size="large"
                variant="outlined"
                sx={{minWidth: "1px !impotent"}}

                disabled={!title || !!error}
                onClick={onClickHandler}
            ><AddOutlinedIcon/></Button>

        </div>
    )
}



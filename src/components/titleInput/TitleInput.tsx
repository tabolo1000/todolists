import { Button, TextField } from "@mui/material";
import { ChangeEvent, FC, useState, KeyboardEvent, memo, useCallback } from "react"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


type TitleInputProps = {
    onClick: (title: string) => void;
}


export const TitleInput = memo(({ onClick }: TitleInputProps) => {
    console.log("title FORM"); 
    const [title, setTitle] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleTypingTitle = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (error) setError(null); 
        setTitle(e.target.value);
    },[setTitle, setError])


    const onClickHandler = useCallback(() => {
        const correctTitle = title.trim();
        if (!correctTitle) {
            setError("Your title have only spaces!");
            return; 
        }
        
        setTitle("");
        onClick(correctTitle); 
    }, [setError, onClick])

    const onKeyHandler = useCallback((e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter" && !error) {
            onClickHandler();
        }
    },[onClickHandler])

    return (
        <div>
            <TextField
                label="Type title!"
                size="small"
                error={!!error}
                autoFocus={false}
                onChange={handleTypingTitle}
                onKeyDown={onKeyHandler}
                value={title}
                type="text"
                helperText={error || ''}
            />
            <Button
                size="large"
                variant="outlined"
                disabled={!title.trim() || !!error}
                onClick={onClickHandler}
            >
                <AddOutlinedIcon />
            </Button>
        </div>
    );
});


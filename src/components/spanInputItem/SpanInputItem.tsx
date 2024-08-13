import { TextField, Typography, TypographyProps } from "@mui/material";
import { useState, KeyboardEvent, MouseEvent, memo, useCallback, ChangeEvent } from "react";
import styled from "styled-components";

type InputProps = {
    onClick: (title: string) => void,
    title: string
    isDone?: boolean
}

export const SpanInputItem = memo(({
    onClick,
    title,
    isDone,

}: InputProps) => {
    console.log("span active")
    const [newTitle, setTitle] = useState<string>('');
    const [activeInput, setActiveInput] = useState<boolean>(false);

    /* ----handlers----- */
    const onBlurSetTitleHandler = useCallback(
        () => {
        setActiveInput(!activeInput)
        if (newTitle.trim()) {
            onClick(newTitle);
            return
        }
        onClick(title)
    }, [onClick, setActiveInput]);
    const onKeyHandler = useCallback(
        (e: KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
        if (e.key === "Enter") {
            onBlurSetTitleHandler()
        }
    }, [onBlurSetTitleHandler]);
    const onDoubleClick = useCallback(
        (e: MouseEvent<HTMLSpanElement>) => {
        setActiveInput(!activeInput)
        setTitle(title)
    }, [setActiveInput, setTitle]);
    const changeHandler = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => 
            setTitle(e.target.value), [setTitle]);

    return (

        (activeInput)
            ? <MyTextField
                size="small"
                variant="outlined"
                color="info"

                value={newTitle}
                autoFocus
                onChange={changeHandler}
                onBlur={onBlurSetTitleHandler}
                onKeyDown={onKeyHandler}
                type="text"
                placeholder="Puting your title!" />
            : <CustomTypography
                lineHeight={3}
                onDoubleClick={onDoubleClick}
                variant="subtitle2">
                {title}
            </CustomTypography>
    )

})

const MyTextField = styled(TextField)({

})


interface CustomTypographyProps extends TypographyProps {
    isDone?: boolean;
}


const CustomTypography = styled(Typography)<CustomTypographyProps>(({ isDone }) => ({
    textShadow: "0px 1px 1px rgba(0, 0, 0, 0.5)",
    color: `${(isDone) ? "blue" : "green"}`, // Использует цвет из пропсов, если он есть, иначе "green"
    fontWeight: 400,
    fontSize: "15px"
}));
import { TextField, Typography, TypographyProps } from "@mui/material";
import { useState, KeyboardEvent } from "react";
import styled from "styled-components";

type InputProps = {
    onClick: (title: string) => void,
    title: string
    isDone?: boolean
}

export const SpanInputItem = ({
    onClick,
    title,
    isDone,

}: InputProps) => {
    const [newTitle, setTitle] = useState<string>('');
    const [activeInput, setActiveInput] = useState<boolean>(false);

    /* ----handlers----- */
    const onBlurSetTitleHandler = () => {
        setActiveInput(!activeInput)
        debugger
        if(newTitle.trim()){
            onClick(newTitle);
            return 
        }
        onClick(title)
    }
    const onKeyHandler = (e: KeyboardEvent<HTMLInputElement | HTMLDivElement>) => {
        if (e.key === "Enter") {
            onBlurSetTitleHandler()
        }

    }
    return (

        (activeInput)
            ? <MyTextField
                size="small"
                variant="outlined"
                color="info"

                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                onBlur={onBlurSetTitleHandler}
                onKeyDown={(e) => onKeyHandler(e)}
                type="text"
                placeholder="Puting your title!" />
            : <CustomTypography
                isDone = {isDone}
                lineHeight={3}
                onDoubleClick={setActiveInput.bind({}, !activeInput)}
                variant="subtitle2">
                {title}
            </CustomTypography>
        /* <span
            onDoubleClick={setActiveInput.bind({}, !activeInput)}
        >{title}</span>*/
    )

}

const MyTextField = styled(TextField)({

})


interface CustomTypographyProps extends TypographyProps {
    isDone?: boolean;
  }


const CustomTypography = styled(Typography)<CustomTypographyProps>(({isDone}) => ({
    textShadow: "0px 1px 1px rgba(0, 0, 0, 0.5)",
    color: `${(isDone) ? "blue" : "green"}`, // Использует цвет из пропсов, если он есть, иначе "green"
    fontWeight: 400,
    fontSize: "15px"
}));
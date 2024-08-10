import React, { FC } from "react";
import { FilterType } from "./types/todolist";
import { ButtonBase } from "@mui/material";

type propsType = {
    title: FilterType
    onClick: (filter: FilterType) => void
}

export const Button: FC<propsType> = ({ title, onClick }) => {
    return (
        <ButtonBase
            onClick={onClick.bind({}, title)}
        >{title}</ButtonBase>
    )
}
import React, { FC } from "react";
import { FilterType } from "./types/todolist";

type propsType = {
    title: FilterType
    onClick: (filter: FilterType) => void
}

export const Button: FC<propsType> = ({ title, onClick }) => {
    return (
        <button
            onClick={onClick.bind({}, title)}
        >{title}</button>
    )
}
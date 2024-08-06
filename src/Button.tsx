import React, {FC} from "react";

type propsType = {
    title: string
}

export const Button: FC<propsType> = ({title}) => {
    return (
        <button>{title}</button>
    )
}
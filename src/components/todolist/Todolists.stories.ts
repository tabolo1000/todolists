import { Meta } from "@storybook/react/*";
import { Todolists } from "./Todolists";
import { ReduxStoreProviderDecorator } from "../../stories/ReduxStoreProviderDecorator";





const meta: Meta<typeof Todolists>  = {
    title: "TODOLISTS/Todolists",
    component: Todolists,
    decorators: ReduxStoreProviderDecorator,
    tags: ["autodocs"],
}

export default meta;


export const  TodolistsStories = {

}

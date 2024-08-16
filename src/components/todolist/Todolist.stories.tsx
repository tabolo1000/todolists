import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from "@storybook/react/*";
import { Todolist } from "./Todolist";
import { ReduxStoreProviderDecorator } from "../../stories/ReduxStoreProviderDecorator";





const meta: Meta<typeof Todolist> = {
    title: "TODOLISTS/Todolist",
    component: Todolist,
    decorators: ReduxStoreProviderDecorator,
    tags: ["autodocs"],
    argTypes: {
        id: {
            control: 'select',
            options: ["todolistId1", "todolistId2"]
        },
        filter: {
            control: 'select',
            options: ['All', 'Active', 'Completed']
        },
        changeFilter: { action: 'setAll' }
    },
    args: {
        id: "todolistId1",
        title: "js",
        filter: "All",

        changeFilter: action("change filter"),
        removeTodolist: action("remove todolist"),
        changeTitleTodolist: action("change title todolist"),
    }
}
const Template = (args: any) => <Todolist {...args} />
export default meta;

export const Default = {}

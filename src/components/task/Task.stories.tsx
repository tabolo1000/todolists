import type { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Task } from './Task';

const ActionsData = {
    removeTask: action('Remove Button clicked changed inside Task'),
    changeStatus: action('Status changed inside Task'),
    changeTitleTask: action('Title changed inside Task'),
};

const meta: Meta<typeof Task> = {
    title: 'TODOLISTS/Task',
    component: Task,
    tags: ['autodocs'],
    argTypes:{
        removeTask: {
            description: 'Remove Button clicked changed inside Task',
        },
        changeStatus:{
            description: 'Status changed inside Task',
        },
        changeTitleTask:{
            description: 'Title changed inside Task'
        },
        id: {
            description: "Id of Task",
            control: "select",
            options: ["todolistId1","todolistId2"]
        },
        title: {
            description: "Name of Task",
            control: "text",
        },
        isDone: {
            description: "Task is done?",
            control: "boolean",
        }

    },
    args: {
        ...ActionsData,
        id: 'todolistId1',
        title: 'JS',
        isDone: false,
    }
};

export default meta;

export const Default = {
    args:{
        isDone:false
    }
}

export const TaskIsDoneStory = {
    args:{
        isDone:true,
    },
};

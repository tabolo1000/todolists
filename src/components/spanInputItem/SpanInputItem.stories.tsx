import { Meta, StoryObj } from "@storybook/react/*";
import { SpanInputItem } from "./SpanInputItem";
import {action} from '@storybook/addon-actions'


const meta: Meta<typeof SpanInputItem> = {
    title: 'TODOLISTS/Span Input Item',
    component: SpanInputItem,
    tags: ['autodocs'],
    excludeStories: /.*Data$/,
    argTypes: {
        title: {
            description: 'Start value empty. Add value push button set string.'
        },
        onClick: {
            description: 'Value EditableSpan changed'
        }
    }
};

export default meta;


type Story = StoryObj<typeof SpanInputItem>;
export const SpanInputItemStory: Story= {
    args: {
        onClick: action('Value EditableSpan changed'),
        title: "title",
    }
};
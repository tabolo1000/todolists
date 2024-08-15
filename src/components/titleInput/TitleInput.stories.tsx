import { action } from '@storybook/addon-actions'
import { Meta } from '@storybook/react/*';
import { TitleInput } from './TitleInput';

const meta: Meta<typeof TitleInput> = {
    title: 'TODOLISTS/Title Input',
    component: TitleInput,
    tags: ['autodocs'],
    argTypes: {
        onClick: {
            description: 'Button clicked inside form',
            action: 'clicked'
        }
    },
};
export default meta;

export const AddItemFormStory = {
    args: {
        onClick: action('Button clicked inside form')
    },
};
import type { Meta } from '@storybook/react';
import App from "./App";
import { ReduxStoreProviderDecorator } from './stories/ReduxStoreProviderDecorator';

const meta: Meta<typeof App> = {
    title: 'TODOLISTS/App',
    component: App,
    tags: ['autodocs'],
    decorators: [ReduxStoreProviderDecorator]

};
    export default meta;

    export const AppWithReduxStory = {}

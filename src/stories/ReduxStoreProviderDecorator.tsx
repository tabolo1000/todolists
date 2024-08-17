import { Provider } from 'react-redux';
import { combineReducers, legacy_createStore } from 'redux';
import { taskReducer } from '../components/reducers/tasks/tasksReducer';
import { todolistsReducer } from '../components/reducers/todolists/todolistsReducer';
import { v1 } from 'uuid';
import { TasksDomainType } from '../types/Task';
import { TodolistDomainType } from '../types/todolist';

const rootReducer = combineReducers({
    tasks: taskReducer,
    todolists: todolistsReducer
})

const initialGlobalState = {
    todolists: [
        {
            id: "todolistId1",
            title: "What to learn",
            filter: "All",
            addedDate: "",
            order: 0,
        },
        {
            id: "todolistId2",
            title: "What to buy",
            filter: "All",
            addedDate: "",
            order: 0,
        }
    ],
    tasks: {
        ["todolistId1"]: [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: false }
        ],
        ["todolistId2"]: [
            { id: v1(), title: "Milk", isDone: false },
            { id: v1(), title: "React Book", isDone: true }
        ]
    }
};

export const storyBookStore = legacy_createStore(rootReducer, initialGlobalState as { tasks: TasksDomainType & never, todolists: TodolistDomainType & never });


export const ReduxStoreProviderDecorator = (storyFn: () => React.ReactNode) => {
    return <Provider store={storyBookStore}>{storyFn()}</Provider>
}
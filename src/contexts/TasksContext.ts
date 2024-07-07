import { createContext } from 'react';
import ITask from '@/interfaces/ITask';

export interface ITasksContext {
	generateTaskId: () => number;
	tasks: ITask[];
	addTask: (task: ITask) => void;
	minimizeTask: (id: number) => void;
	removeTask: (id: number) => void;
}

const defaultValues: ITasksContext = {
    generateTaskId: () => 0,
    tasks: [],
    addTask: () => {},
    minimizeTask: () => {},
    removeTask: () => {},
};

const TasksContext = createContext<ITasksContext>(defaultValues);

export default TasksContext;
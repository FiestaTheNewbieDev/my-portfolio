'use client';

import { useState } from 'react';
import TasksContext, { ITasksContext } from '@/contexts/TasksContext';
import ITask from '@/interfaces/ITask';

interface IProps {
	children?: React.ReactNode;
}

export default function TasksManager(props: IProps) {
	const [previousTaskId, setPreviousTaskId] = useState<number>(0);
	const [tasks, setTasks] = useState<ITask[]>([]);

	const contextValues: ITasksContext = {
		generateTaskId() {
			setPreviousTaskId(previousTaskId + 1);
			return previousTaskId;
		},
		tasks,
		addTask(task: ITask) {
			setTasks([...tasks, task]);
		},
		minimizeTask(id: number) {
			setTasks(
				tasks.map((task) =>
					task.id === id
						? { ...task, minimized: !task.minimized }
						: task,
				),
			);
		},
		removeTask(id: number) {
			setTasks(tasks.filter((task) => task.id !== id));
		},
	};

	return (
		<TasksContext.Provider value={contextValues}>
			{props.children}
		</TasksContext.Provider>
	);
}

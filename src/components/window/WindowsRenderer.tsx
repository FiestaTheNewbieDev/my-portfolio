'use client';

import { useContext } from 'react';
import TasksContext from '@/contexts/TasksContext';
import Window from '@/components/window/Window';

export default function WindowsRenderer() {
	const { tasks } = useContext(TasksContext);

	return tasks.length > 0 ? (
		tasks.map((task) => <Window key={task.id} {...task} />)
	) : (
		<></>
	);
}

import { useContext } from 'react';
import Image from 'next/image';
import TasksContext from '@/contexts/TasksContext';
import ITask from '@/interfaces/ITask';

interface IProps extends ITask {}

export default function TaskbarItem(props: IProps) {
	const { minimizeTask } = useContext(TasksContext);

	function handleClick() {
		minimizeTask(props.id);
	}

	return (
		<button
			className="flex h-full w-48 max-w-48 justify-start bg-white p-1"
			onClick={handleClick}
		>
			<Image src={props.icon} alt={props.title} height={24} width={24} />
			<span className="ml-2 overflow-hidden truncate">{props.title}</span>
		</button>
	);
}

import { useContext } from 'react';
import Image from 'next/image';
import TasksContext from '@/contexts/TasksContext';

interface IProps {
	title: string;
	icon?: string;
	children?: React.ReactNode;
}

export default function App(props: IProps) {
	const { generateTaskId, addTask } = useContext(TasksContext);

	const icon = 'https://placehold.co/48x48.jpg';

	function handleClick() {
		addTask({
			id: generateTaskId(),
			title: props.title,
			icon: icon,
			minimized: false,
			page: props.children,
		});
	}

	return (
		<button className="h-fit w-24" onClick={handleClick}>
			<Image
				className="mx-auto"
				src={icon}
				alt={props.title}
				width={64}
				height={64}
			/>
			<p
				className="overflow-hidden truncate text-white"
				style={{ textShadow: '0px 0px 3px black' }}
			>
				{props.title}
			</p>
		</button>
	);
}

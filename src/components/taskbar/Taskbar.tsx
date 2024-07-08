'use client';

import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear, faVolumeHigh } from '@fortawesome/free-solid-svg-icons';
import TasksContext from '@/contexts/TasksContext';
import TaskbarItem from '@/components/taskbar/TaskbarItem';
import { type RootState } from '@/lib/store';
import Clock from '@/components/Clock';
import ITask from '@/interfaces/ITask';

interface IProps {
	className?: string;
}

export default function Taskbar(props: IProps) {
	const { tasks } = useContext(TasksContext);
	const osSettings = useSelector((state: RootState) => state.osSettings);

	return (
		<div
			className={`flex h-12 w-full items-center justify-between gap-2 p-2 ${props.className}`}
			style={{ backgroundColor: osSettings.theme.primary }}
		>
			<div className="flex flex-1 justify-start gap-2 overflow-hidden">
				{tasks.map((task: ITask) => (
					<TaskbarItem key={task.id} {...task} />
				))}
			</div>
			<div className="flex gap-2">
				<button>
					<FontAwesomeIcon
						icon={faVolumeHigh}
						className="text-white"
						width={24}
						height={24}
					/>
				</button>
				<button>
					<FontAwesomeIcon
						icon={faGear}
						className="text-white"
						width={24}
						height={24}
					/>
				</button>
				<Clock className="text-white text-sm" />
			</div>
		</div>
	);
}

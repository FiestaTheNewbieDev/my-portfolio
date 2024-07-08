import { useContext, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Rnd } from 'react-rnd';
import { useSelector } from 'react-redux';
import TasksContext from '@/contexts/TasksContext';
import ITask from '@/interfaces/ITask';
import { RootState } from '@/lib/store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faX } from '@fortawesome/free-solid-svg-icons';

interface ICoords {
	x: number;
	y: number;
}

interface ISize {
	width: number;
	height: number;
}

interface IProps extends ITask {}

export default function Window(props: IProps) {
	const { minimizeTask, removeTask } = useContext(TasksContext);
	const osSettings = useSelector((state: RootState) => state.osSettings);

	const [size, setSize] = useState<ISize>({
		width: (window.innerWidth / 3) * 2,
		height: (window.innerHeight / 3) * 2,
	});
	const [coords, setCoords] = useState<ICoords>({
		x: (window.innerWidth - size.width) / 2,
		y: (window.innerHeight - size.height) / 2,
	});

	function handleMinimize() {
		minimizeTask(props.id);
	}

	function handleClose() {
		removeTask(props.id);
	}

	return !props.minimized ? (
		<Rnd
			position={{ x: coords.x, y: coords.y }}
			size={{ width: size.width, height: size.height }}
			minWidth={320}
			minHeight={128}
			onDragStop={(e, d) => {
				setCoords({ x: d.x, y: d.y });
			}}
			onResizeStop={(e, direction, ref, delta, position) => {
				setSize({
					width: parseInt(ref.style.width),
					height: parseInt(ref.style.height),
				});
				setCoords({ x: position.x, y: position.y });
			}}
			bounds="parent"
			cancel=".disable-dragging"
		>
			<div
				className="flex h-12 items-center justify-between"
				style={{ backgroundColor: osSettings.theme.primary }}
			>
				<div className="ml-2 flex justify-start gap-2">
					<Image
						src={props.icon}
						alt={props.title}
						width={24}
						height={24}
					/>
					<span className="text-white">{props.title}</span>
				</div>
				<div className="disable-dragging h-full">
					<button className="h-full px-4" onClick={handleMinimize}>
						<FontAwesomeIcon
							icon={faMinus}
							className="text-white"
						/>
					</button>
					<button className="h-full px-4" onClick={handleClose}>
						<FontAwesomeIcon icon={faX} className="text-white" />
					</button>
				</div>
			</div>
		</Rnd>
	) : (
		<></>
	);
}

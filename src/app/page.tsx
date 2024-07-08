import TasksManager from '@/components/TasksManager';
import Desktop from '@/components/Desktop';
import Taskbar from '@/components/taskbar/Taskbar';
import WindowsRenderer from '@/components/window/WindowsRenderer';
import './styles.css';

export default async function Page() {
	return (
		<TasksManager>
			<div className="max-w-screen flex h-screen max-h-screen w-screen flex-col">
				<Desktop className="flex-1" />
				<Taskbar className="z-50" />
				<WindowsRenderer />
			</div>
		</TasksManager>
	);
}

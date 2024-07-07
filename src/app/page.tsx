import TasksManager from '@/components/TasksManager';
import Desktop from '@/components/Desktop';
import Taskbar from '@/components/taskbar/Taskbar';
import WindowsRenderer from '@/components/window/WindowsRenderer';

export default function Page() {
	return (
		<TasksManager>
			<div className="max-w-screen flex h-screen max-h-screen w-screen flex-col">
				<Desktop className="flex-1" />
				<Taskbar />
				<WindowsRenderer />
			</div>
		</TasksManager>
	);
}

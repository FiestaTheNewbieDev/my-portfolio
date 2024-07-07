'use client';

import ProjectsApp from "@/components/apps/ProjectsApp";

interface IProps {
	className?: string;
}

export default function Desktop(props: IProps) {
	return (
		<div className={`p-2 ${props.className}`}>
			<div className="flex max-h-[95vh] w-fit flex-col flex-wrap gap-2">
				<ProjectsApp />
			</div>
		</div>
	);
}

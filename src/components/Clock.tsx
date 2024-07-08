'use client';

import { useState, useEffect } from 'react';

interface IProps {
	className?: string;
}

export default function Clock(props: IProps) {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

    return (
		<p className={`text-center ${props.className}`}>
			{currentTime.toLocaleTimeString()}
            <br />
			{currentTime.toLocaleDateString()}
		</p>
	);
}

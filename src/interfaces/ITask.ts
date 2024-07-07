import React from 'react';

export default interface ITask {
	id: number;
	title: string;
    icon: string;
    minimized: boolean;
	page: React.ReactNode;
}

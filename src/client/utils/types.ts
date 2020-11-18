import { RouteComponentProps } from "react-router";

export interface IBlogProps extends RouteComponentProps {
	id?: number;
	title?: string;
	content?: string;
	authorid?: number;
	_created?: Date;
	name?: string;
}
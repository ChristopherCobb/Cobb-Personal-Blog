import { RouteComponentProps } from "react-router";

export interface IBlogProps extends RouteComponentProps<{id:string}> {
	id?: string;
	title?: string;
	content?: string;
	authorid?: number;
	_created?: (Date | number);
	name?: string;
}
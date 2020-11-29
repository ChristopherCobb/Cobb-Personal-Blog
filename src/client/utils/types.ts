import { RouteComponentProps } from "react-router";

export interface IBlogProps extends RouteComponentProps<{id:string}> {
	id?: number
	title?: string;
	content?: string;
	authorid?: string;
	_created?: (Date | number);
	name?: string;
	tags?:[]
}





// export interface blog {
//     id: number,
//     title: string,
//     content: string,
//     name: string,
// 	tags?: [],
// 	_created: string
// }

// export interface newBlog {
//     author: {
//         name: string,
//         email: string
//     },
//     blog: {
//         title: string,
//         content: string,
//         tags: string[]
//     },
// }
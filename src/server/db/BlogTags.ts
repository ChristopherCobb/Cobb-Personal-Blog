import { Query } from './index';

interface TBlogTags {
    blogid: number;
    tagid: number
}

const all = () => Query(`SELECT blogs.* FROM Blogs JOIN Authors ON Authors.id = Blogs.authorid`);

const post = (blogid: number, tagid: number) => Query(`INSERT INTO BlogTags (blogid, tagid) VALUE (?, ?);`, [blogid, tagid]);

export default {
    all,
    post
}
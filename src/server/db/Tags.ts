import { Query } from './index';


const all = () => Query(`SELECT * FROM Tags`);


const post = (blogid: string, tagid: string) => Query(`INSERT INTO BlogTags (blogid, tagid) value (?, ?);`, [blogid, tagid]);

export default {
    all,
    post
}

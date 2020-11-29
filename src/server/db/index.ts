import * as mysql from "mysql";
import config from "../config";

import Blogs from "./blogs"
import Authors from "./authors"
// import Users from "./users";
import Tokens from "./tokens"


//node mysql connection pool
export const pool = mysql.createPool(config.mysql)

//reusable query helper method
export const Query = (query: string, values?: Array<string | number>) => {
    return new Promise<Array<any>>((resolve, reject) => {
        pool.query(query, values, (err,results) => {
            if(err) return reject(err);
            resolve(results)
        })
    })
}


export default {
    Blogs,
    Authors,
    // Users,
    Tokens
}
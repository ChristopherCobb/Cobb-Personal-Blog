import * as express from "express";

import DB from "../../db";
import {HashPassword} from "../../utils/security/passwords";
import {CreateToken} from "../../utils/security/tokens";


const router = express.Router();


router.post ("/", async (req, res, next) => {
    try {
        let user = req.body;
        // console.log(user)
        user.password = HashPassword(req.body.password);
        let result: any = await DB.Authors.insert(user.email, user.name, user.password)
        let token = await CreateToken( { userid: result.insertId } )
        res.json({
            token,
            role: 'guest',
            userid: result.insertId
        })
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
})

// export interface ResponseObject
// {
//     fieldCount: number,
//     affectedRows: number,
//     insertId: number,
//     serverStatus: number,
//     warningCount: number,
//     message: string,
//     protocol41: boolean,
//     changedRows: number;
// }

// const query = function <T = unknown>(query: _, parameters?: _): Promise<T[] & ResponseObject>


export default router;

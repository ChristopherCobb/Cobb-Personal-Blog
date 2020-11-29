import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";
import { createLogicalAnd, isParameter } from "typescript";

import config from "../../config";
import DB from "../../db";

export const CreateToken = async (payload: IPayload) => {
  // console.log(payload)
  let tokenid: any = await DB.Tokens.insert(payload.userid);
  // console.log(tokenid)
  payload.accesstokenid = tokenid.insertId;
  console.log(payload.accesstokenid)
  payload.unique = crypto.randomBytes(32).toString("hex");
  let token = await jwt.sign(payload, config.auth.secret);
  // console.log(token)
  await DB.Tokens.update(payload.accesstokenid, token);
  return token;
};

export const ValidToken = async (token: string) => {
  let payload: IPayload = <IPayload>jwt.decode(token);
  let [accesstokenid] = await DB.Tokens.findOne(payload.accesstokenid, token);

  if (!accesstokenid) {
    throw new Error("invalid token!");
  } else {
   
    return payload;
  }
};

export interface IPayload {
  [key: string]: any;
  userid: number;
  unique?: string;
}

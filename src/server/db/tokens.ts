import { Query } from "./index";

// const findOne = async (id: number, token:string) => Query(`SELECT * FROM tokens WHERE ID = ? AND token = ?`, [id, token]);

// const insert = async (userid:number) => Query (`Insert INTO tokens (userid) VALUES (?)`, [userid]);

// const update = async (id: number, token: string ) => Query (`UPDATE tokens SET token = ? WHERE id = ?`, [id, token]);

const findOne = async (id: number, token: string) => Query(`SELECT * FROM tokens WHERE id = ${id} AND token = '${token}'`);

// const findOne = async (id: string, token: string) =>
//   Query(
//     `
// SELECT * FROM tokens
// WHERE id =? AND token = ?
// `,
//     [id, token]
//   );

const insert = async (userid: number) =>
  Query(`INSERT INTO tokens (userid) VALUES (${userid})`);

const update = async (id: number, token: string) =>
  Query(`UPDATE tokens SET token = '${token}' WHERE id = ${id}`);

export default {
  findOne,
  insert,
  update,
};

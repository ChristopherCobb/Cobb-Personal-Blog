import { Query } from './index';

const newAuthor = (name: string, email: string) => Query(`
INSERT INTO Authors (name, email)
VALUES (?, ?)
`, [name, email]);


const findOneByEmail = async (email: string) => Query(` Select * FROM Authors where email = '${email}' LIMIT 1`)

const findOneById = async (id: number) => Query(`SELECT * FROM Authors WHERE ID =${id} LIMIT 1`)

const insert = async (email: string, name: string, password: string) => Query(`INSERT INTO Authors (email, name, password) VALUES (?, ?, ?)`, [email, name, password])

// const insert = async (columns: string, values: any[]) => Query(`INSERT INTO users (${columns}) VALUE (?);`, values);



export default {
    newAuthor,
    findOneByEmail,
    findOneById,
    insert
};
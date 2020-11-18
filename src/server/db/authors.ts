import { Query } from './index';

const newAuthor = (name: string, email: string) => Query(`
INSERT INTO Authors (name, email)
VALUES (?, ?)
`, [name, email]);

export default {
    newAuthor
};